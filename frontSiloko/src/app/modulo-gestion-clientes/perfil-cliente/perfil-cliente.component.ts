import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  public cliente = <Cliente> {};

  constructor(private clienteService:ClienteService) { 
    this.cliente =  <Cliente> JSON.parse(localStorage.getItem("client"));
  }

  ngOnInit(): void {
    this.loadData();
  }


  loadData():void{
    let idCliente = this.cliente.id;
    this.clienteService.getClienteById(idCliente).subscribe(data=>{
      this.cliente = <Cliente> data;
      localStorage.removeItem("client");
      localStorage.setItem("client",JSON.stringify(this.cliente));
    })
  }


}
