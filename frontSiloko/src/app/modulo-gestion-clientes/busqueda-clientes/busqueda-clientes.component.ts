import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-busqueda-clientes',
  templateUrl: './busqueda-clientes.component.html',
  styleUrls: ['./busqueda-clientes.component.css']
})
export class BusquedaClientesComponent implements OnInit {


  public buscando = false;
  mode: ProgressSpinnerMode = 'determinate';
  
  public formG :FormGroup;

  constructor(private formBuilder:FormBuilder) { 

    this.formG = this.generateForm();

  }


  private generateForm():FormGroup{
    return this.formBuilder.group({
      'idCliente': new FormControl('',[Validators.required])
    });
  }


public onSubmit():void{
    if(this.formG.valid){
      this.buscando = true; 
      this.mode = <ProgressSpinnerMode> 'indeterminate';
    }
  }



  ngOnInit(): void {
  }

}
