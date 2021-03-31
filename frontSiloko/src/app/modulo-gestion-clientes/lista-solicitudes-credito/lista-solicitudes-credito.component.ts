import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Cliente } from 'src/app/models/Cliente';
import { SolicitudCredito } from 'src/app/models/SolicitudCredito';
import { SolicitudCreditoService } from 'src/app/services/solicitud-credito.service';

@Component({
  selector: 'app-lista-solicitudes-credito',
  templateUrl: './lista-solicitudes-credito.component.html',
  styleUrls: ['./lista-solicitudes-credito.component.css']
})
export class ListaSolicitudesCreditoComponent implements OnInit {

  data: SolicitudCredito[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['fechaS', 'codigoCredito', 'producto', 'precio','nCuotas', 'estado','descripcion'];
  
  
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10,20];
  pageEvent: PageEvent;
  
  private client :Cliente;

  constructor(private solicitudService:SolicitudCreditoService) { 
    this.client = <Cliente> JSON.parse(localStorage.getItem("client"));
  }

  loadData():void{
    this.solicitudService.getListSolicitudCreditoByIdClient(this.client.id,0,5).subscribe((response)=>{
      this.length = Number(response.headers.get('rows-limit'));
      this.data =<SolicitudCredito[]> response.body;
    })

  }

  ngOnInit(): void {
    this.loadData();
  }

  eventPage(event){
    this.pageEvent = event;
    this.solicitudService.getListSolicitudCreditoByIdClient(this.client.id,this.pageEvent.pageIndex,this.pageEvent.pageSize).subscribe((response)=>{
      this.length = Number(response.headers.get('rows-limit'));
      this.data =<SolicitudCredito[]> response.body;
    })
  }


  ngAfterViewInit() {

  }
}
