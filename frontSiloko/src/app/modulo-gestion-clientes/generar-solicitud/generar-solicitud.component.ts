import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoCredito } from 'src/app/models/ProductoCredito';
import { ProductoCreditoService } from 'src/app/services/producto-credito.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { ValidatorsMessage } from 'src/app/validatorsMessage';

@Component({
  selector: 'app-generar-solicitud',
  templateUrl: './generar-solicitud.component.html',
  styleUrls: ['./generar-solicitud.component.css']
})
export class GenerarSolicitudComponent implements OnInit {

  public formG:FormGroup
  public messageError : ValidatorsMessage;
  public productoCredito: ProductoCredito;
  public moneda :String;

  constructor(private formBuilder:FormBuilder, private productoService:ProductoCreditoService, private alertService:AlertBannerService) {
    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
   }

  ngOnInit(): void {
  }


  public getFc(name) {
    return this.formG.get(name);
  }

  public hasErros(name) {
    return (this.getFc(name).dirty || this.getFc(name).touched) && this.getFc(name).errors;
  }


  private generateForm():FormGroup{
    return this.formBuilder.group({
      'silokoCode': new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }



  public BuscarProducto():void{
    if(this.formG.valid){
      let codigo = Number(this.getFc('silokoCode').value);
      this.productoService.getProductoCreditoBySilokoCode(codigo+"").subscribe(data=>{
        this.productoCredito = <ProductoCredito> data;
        this.moneda = this.productoCredito.store.country.typeCoin;
        this.alertService.messageSuccesTransaction();
      },err=>{
        if(err.status === 404){
          this.formG.reset()
          this.formG = this.generateForm();
          this.alertService.messageErrorNofound(" Producto o electrodomestico");
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
