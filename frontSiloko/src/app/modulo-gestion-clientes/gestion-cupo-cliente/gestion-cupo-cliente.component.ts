import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { CupoCredito } from 'src/app/models/CupoCredito';

@Component({
  selector: 'app-gestion-cupo-cliente',
  templateUrl: './gestion-cupo-cliente.component.html',
  styleUrls: ['./gestion-cupo-cliente.component.css']
})
export class GestionCupoClienteComponent implements OnInit {

  public cupoCredito:CupoCredito;


  constructor() { 
    let cliente  = <Cliente>JSON.parse(localStorage.getItem("client"));
    this.cupoCredito = cliente.credit;
  }

  ngOnInit(): void {
  }

}
