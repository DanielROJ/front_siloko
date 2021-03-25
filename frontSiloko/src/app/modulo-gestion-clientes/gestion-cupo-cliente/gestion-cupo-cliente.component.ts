import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { CupoCredito } from 'src/app/models/CupoCredito';
import { ClienteService } from 'src/app/services/cliente.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';

@Component({
  selector: 'app-gestion-cupo-cliente',
  templateUrl: './gestion-cupo-cliente.component.html',
  styleUrls: ['./gestion-cupo-cliente.component.css']
})
export class GestionCupoClienteComponent implements OnInit {

  private cliente:Cliente;
  public cupoCredito:CupoCredito;
  public moneda:string;

  constructor(private clienteService:ClienteService, private alertBanner:AlertBannerService) { 
    this.cliente  = <Cliente>JSON.parse(localStorage.getItem("client"));
    this.cupoCredito = this.cliente.credit;
    this.moneda = this.cliente.city.country.typeCoin;
  }

  ngOnInit(): void {
  }



  BloquearCupo():void{
    this.clienteService.setBloquearCupoCredito(this.cliente.id).subscribe(data=>{
      if(data){
        this.alertBanner.messageSuccesTransaction();
      }
    },err=>{
      if(err.status === 404 || err.status === 400){
        this.alertBanner.messageErrorTransaction("")
      }else if(err.status === 500){
        this.alertBanner.messageErrorSystem();
      }
    })
  }


  GenerarCupoAutmatico():void{

  }


  asignarCupo():void{

  }




}
