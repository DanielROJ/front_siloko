import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
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
  mode: ProgressSpinnerMode = 'determinate';
  public formG :FormGroup;
  public messageError: ValidatorsMessage;

  constructor(private formBuilder:FormBuilder, private clienteService :ClienteService, private alertService:AlertBannerService) { 

    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();

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
      this.buscando = true; 
      this.mode = <ProgressSpinnerMode> 'indeterminate';

      let documento = Number(this.formG.get("idCliente").value);
      this.clienteService.getClienteByDocumentoId(documento).subscribe(data=>{
        console.log(data)
      },err=>{
        this.buscando = false; 
        this.mode = <ProgressSpinnerMode> 'determinate';
      })



    }
  }



  ngOnInit(): void {
  }

}
