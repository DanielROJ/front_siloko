import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Cliente } from 'src/app/models/Cliente';
import { Recibo } from 'src/app/models/Recibo';
import { ReciboService } from 'src/app/services/recibo.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { DetalleReciboClienteComponent } from '../Dialogs/detalle-recibo-cliente/detalle-recibo-cliente.component';

@Component({
  selector: 'app-lista-recibos-cliente',
  templateUrl: './lista-recibos-cliente.component.html',
  styleUrls: ['./lista-recibos-cliente.component.css']
})
export class ListaRecibosClienteComponent implements OnInit {


  data: Recibo[] = [];

  public cliente:Cliente;

    
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10,20];
  pageEvent: PageEvent;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['fechaR', 'codigoRecibo', 'totalp', 'totalc','total','accion'];




  constructor(private reciboService:ReciboService,private alertBanner: AlertBannerService, private matDialog:MatDialog) {
    this.cliente = <Cliente> JSON.parse(localStorage.getItem("client"));
   }

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    let idCliente = this.cliente.id;
    this.reciboService.getListRecibosByIdCliente(idCliente,0,5).subscribe(data=>{
      this.length = Number(data.headers.get('rows-limit'));
      this.data = <Recibo[]> data.body;
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })
  }


  
  eventPage(event){
    this.pageEvent = event;
    let idCliente = this.cliente.id;
    this.reciboService.getListRecibosByIdCliente(idCliente,this.pageEvent.pageIndex,this.pageEvent.pageSize).subscribe(data=>{
      this.length = Number(data.headers.get('rows-limit'));
      this.data = <Recibo[]> data.body;
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })
  }



  pagoRecibo(recibo):void{
    console.log(recibo)
    this.matDialog.open(DetalleReciboClienteComponent,{
      data:recibo,
      width:"800px",
      closeOnNavigation:false
    })
  }


}
