import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteProductosTel } from 'src/app/models/ClienteProductosTel';
import { Recibo } from 'src/app/models/Recibo';
import { SolicitudCredito } from 'src/app/models/SolicitudCredito';
import { ReciboService } from 'src/app/services/recibo.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';

@Component({
  selector: 'app-detalle-recibo-cliente',
  templateUrl: './detalle-recibo-cliente.component.html',
  styleUrls: ['./detalle-recibo-cliente.component.css']
})
export class DetalleReciboClienteComponent implements OnInit {

  public listClienteProductosTel : ClienteProductosTel[];
  public listSolicitudesCredito : SolicitudCredito[]

  public totalProductos  :number;
  public totalCreditos: number;

  

  constructor(private dialogRef: MatDialogRef<DetalleReciboClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recibo, private reciboService:ReciboService, private alertBanner: AlertBannerService) {
      this.totalProductos = this.data.valTotalProduct;
      this.totalCreditos = this.data.valTotalCredit;
    }

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    let idRecibo = this.data.id
    this.reciboService.getProductosRecibos(idRecibo).subscribe((response)=>{
      this.listClienteProductosTel = <ClienteProductosTel[]> response;
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })


    this.reciboService.getSolicitudesCredito(idRecibo).subscribe((response)=>{
     this.listSolicitudesCredito = <SolicitudCredito[]> response;
     
    }, err => {
      if (err.status === 404 || err.status === 400) {
        this.alertBanner.messageErrorTransaction("")
      } else if (err.status === 500) {
        this.alertBanner.messageErrorSystem();
      }
    })

  }

  calculaTotalDeuda(item:SolicitudCredito):number{
    return item.product.valueProduct-((item.product.valueProduct/item.numFees)*item.numFeesPaid); 
  }


}
