import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/Cliente';
import { CupoCredito } from 'src/app/models/CupoCredito';
import { Funcionario } from 'src/app/models/Funcionario';
import { ClienteService } from 'src/app/services/cliente.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { CupoManualComponent } from '../Dialogs/cupo-manual/cupo-manual.component';

@Component({
  selector: 'app-gestion-cupo-cliente',
  templateUrl: './gestion-cupo-cliente.component.html',
  styleUrls: ['./gestion-cupo-cliente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GestionCupoClienteComponent implements OnInit {

  private cliente: Cliente;
  private funcionario: Funcionario;



  public cupoCredito: CupoCredito;
  public moneda: string;

  constructor(private clienteService: ClienteService, private alertBanner: AlertBannerService, private dialog: MatDialog) {
    this.cliente = <Cliente>JSON.parse(localStorage.getItem("client"));
    this.cupoCredito = this.cliente.credit;
    this.moneda = this.cliente.city.country.typeCoin;
  }

  ngOnInit(): void {
  }

  private UpdateCookieCliente(cliente: Cliente): void {
    localStorage.removeItem("client");
    localStorage.setItem("client", JSON.stringify(cliente));
  }


  BloquearCupo(): void {
    this.clienteService.setBloquearCupoCredito(this.cliente.id, 2).subscribe(data => {
      this.cupoCredito = <CupoCredito>data;
      this.cliente.credit = <CupoCredito>data;

      this.UpdateCookieCliente(this.cliente);

      if (data) {
        this.alertBanner.messageSuccesTransaction();
      }
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })
  }


  DesbloquearCupo(): void {
    this.clienteService.setDesbloquearCupoCredito(this.cliente.id, 2).subscribe(data => {
      this.cupoCredito = <CupoCredito>data;
      this.cliente.credit = <CupoCredito>data;

      this.UpdateCookieCliente(this.cliente);

      if (data) {
        this.alertBanner.messageSuccesTransaction();
      }
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })
  }


  GenerarCupoAutmatico(): void {
    this.clienteService.setGenerarCupoCredito(this.cliente.id, 2).subscribe(data => {
      this.cupoCredito = <CupoCredito>data;
      this.cliente.credit = <CupoCredito>data;

      this.UpdateCookieCliente(this.cliente);

      if (data) {
        this.alertBanner.messageSuccesTransaction();
      }
    }, err => {
      console.log(err)
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction(err.error.message)
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })
  }


  asignarCupo(): void {
    this.dialog.open(CupoManualComponent, {
      panelClass: "card-interna",
      data: { moneda: this.moneda, credito: this.cliente.credit.id }
    }).afterClosed().subscribe(data => {
      this.cliente.credit = <CupoCredito>data.data;
      this.cupoCredito = <CupoCredito>data.data;
      this.UpdateCookieCliente(this.cliente);
    });
  }




}
