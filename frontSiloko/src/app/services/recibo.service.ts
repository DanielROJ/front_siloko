import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';

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




}
