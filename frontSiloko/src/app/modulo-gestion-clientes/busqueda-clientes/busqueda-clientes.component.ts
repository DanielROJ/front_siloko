import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { ValidatorsMessage } from 'src/app/validatorsMessage';

@Component({
  selector: 'app-busqueda-clientes',
  templateUrl: './busqueda-clientes.component.html',
  styleUrls: ['./busqueda-clientes.component.css']
})
export class BusquedaClientesComponent implements OnInit {


  public buscando = false;
  public datosCliente = false;
  mode: ProgressSpinnerMode = 'determinate';
  public formG :FormGroup;
  public messageError: ValidatorsMessage;
  public cliente:Cliente;  
  public moneda:string;

  constructor(private formBuilder:FormBuilder, private clienteService :ClienteService, private alertService:AlertBannerService,
    private router:Router) { 

    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
    localStorage.removeItem("client");

  }


  private generateForm():FormGroup{
    return this.formBuilder.group({
      'idCliente': new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }


  public getFc(name) {
    return this.formG.get(name);
  }

  public hasErros(name) {
    return (this.getFc(name).dirty || this.getFc(name).touched) && this.getFc(name).errors;
  }



public onSubmit():void{
    if(this.formG.valid){
      /*
      this.buscando = true; 
      this.mode = <ProgressSpinnerMode> 'indeterminate';
      */
      let documento = Number(this.formG.get("idCliente").value);
      localStorage.removeItem("client");
      this.clienteService.getClienteByDocumentoId(documento).subscribe(data=>{
        this.cliente = <Cliente> data;
        this.moneda = this.cliente.city.country.typeCoin;
        localStorage.setItem("client",JSON.stringify(this.cliente));
        this.buscando = false; 
        this.mode = <ProgressSpinnerMode> 'determinate';
        this.datosCliente = true;

      },err=>{
        this.buscando = false; 
        this.mode = <ProgressSpinnerMode> 'determinate';
        this.datosCliente = false;
        if(err.status === 404){
          this.formG.reset()
          this.formG = this.generateForm();
          this.alertService.messageErrorNofound("Cliente");
          return;
        }else if(err.status === 500){
          this.formG.reset()
          this.formG = this.generateForm();
          this.alertService.messageErrorSystem();
        }
      })



    }
  }


  toGestionCliente():void{
    this.router.navigateByUrl("/siloko/menu");
    return;
  }

  toGenerarSolicitud():void{
    this.router.navigateByUrl("siloko/solicitud");
    return;
  }


  ngOnInit(): void {
  }

}
