import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SolicitudCredito } from 'src/app/models/SolicitudCredito';
import { SolicitudCreditoService } from 'src/app/services/solicitud-credito.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { ValidatorsMessage } from 'src/app/validatorsMessage';

@Component({
  selector: 'app-pago-producto',
  templateUrl: './pago-producto.component.html',
  styleUrls: ['./pago-producto.component.css']
})
export class PagoProductoComponent implements OnInit {

  public formG:FormGroup;
  public messageError:ValidatorsMessage;
  public solicitdCredito:SolicitudCredito;
  public moneda = ""


  constructor(private formBuilder:FormBuilder, private solicitudService:SolicitudCreditoService, private alertService:AlertBannerService) {
    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
   }

  
  public getFc(name) {
    return this.formG.get(name);
  }

  public hasErros(name) {
    return (this.getFc(name).dirty || this.getFc(name).touched) && this.getFc(name).errors;
  }


  private generateForm():FormGroup{
    return this.formBuilder.group({
      'codigoCredito': new FormControl('',[Validators.required]),
      'idCliente': new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      'nCuotas': new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  BuscarSoliciutdCredito():void{
    if(this.getFc("idCliente").valid && this.getFc("codigoCredito").valid){
      let documento = Number(this.getFc("idCliente").value);
      let code = String(this.getFc("codigoCredito").value).trim();

      this.solicitudService.getSolicitudByCodeAndDocClient(code,documento).subscribe(data=>{
        this.solicitdCredito = <SolicitudCredito>data;
        this.moneda = data.product.store.country.typeCoin;
        this.alertService.messageSuccesTransaction();
      },err=>{
        if(err.status === 404){
          this.formG.reset()
          this.formG = this.generateForm();
          this.alertService.messageErrorNofound("Solicitud de credito");
          return;
        }else if(err.status === 500){
          this.formG.reset()
          this.formG = this.generateForm();
          this.alertService.messageErrorSystem();
        }
      })

    }
  }

}
