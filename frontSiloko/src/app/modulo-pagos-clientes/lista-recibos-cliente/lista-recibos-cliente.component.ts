import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Recibo } from 'src/app/models/Rescibo';

@Component({
  selector: 'app-lista-recibos-cliente',
  templateUrl: './lista-recibos-cliente.component.html',
  styleUrls: ['./lista-recibos-cliente.component.css']
})
export class ListaRecibosClienteComponent implements OnInit {


  data: Recibo[] = [];

    
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10,20];
  pageEvent: PageEvent;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['fechaR', 'codigoRecibo', 'totalp', 'totalc','total'];




  eventPage(event){

  }




  constructor() { }

  ngOnInit(): void {
  }

}
