import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { ClienteProductosTel } from '../models/ClienteProductosTel';
import { SolicitudCredito } from '../models/SolicitudCredito';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {
  private headers:HttpHeaders;


  constructor(private http:HttpClient, private urlProvider:UrlsApi) {
    this.headers =new HttpHeaders().set('Content-Type','application/json');
   }


   public getListRecibosByIdCliente(idCliente:number, nPage:number, nRows:number):Observable<any>{
    return  this.http.get(this.urlProvider.getListRecibosByIdClient+"?id="+idCliente+"&nPage="+nPage+"&nRows="+nRows,{headers:this.headers,observe:"response"});
   }

   public ExecuteGenerarRecibos():Observable<any>{
     return this.http.post(this.urlProvider.ExecuteProcesoGenerarRecibos,{},{headers:this.headers});
   }


   public getProductosRecibos(idRecibo:number):Observable<ClienteProductosTel[]>{
     return this.http.get<ClienteProductosTel[]>(this.urlProvider.getListProductosRecibo+"?idRecibo="+idRecibo,{headers:this.headers});
   }


   public getSolicitudesCredito(idRecibo:number):Observable<SolicitudCredito[]>{
     return this.http.get<SolicitudCredito[]>(this.urlProvider.getListSolicitudCreditoRecibo+"?idRecibo="+idRecibo,{headers:this.headers});
   }



}
