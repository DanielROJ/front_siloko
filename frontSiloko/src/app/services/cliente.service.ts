import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { Cliente } from '../models/Cliente';
import { CupoCredito } from '../models/CupoCredito';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private headers:HttpHeaders;


  constructor(private http:HttpClient, private urlProvider:UrlsApi) {
    this.headers =new HttpHeaders().set('Content-Type','application/json');
   }

   /**
    * Metodo que permite buscar un usuario basado su documento de identificacion nacional
    * @param documento numero de identificacion nacional
    * @returns  Observable<Cliente>
    */
   public getClienteByDocumentoId(documento:number): Observable<Cliente>{
     return this.http.get<Cliente>(this.urlProvider.getClienteByDocumento+'?value='+documento,{headers:this.headers});
   }


   public setBloquearCupoCredito(idCliente:Number, idFuncionario:Number): Observable<CupoCredito>{
     return this.http.post<CupoCredito>(this.urlProvider.setBloquearCupo+"?cliente="+idCliente+"&funcionario="+idFuncionario,{},{headers:this.headers});
   }

   public setDesbloquearCupoCredito(idCliente:Number, idFuncionario:Number): Observable<CupoCredito>{
    return this.http.post<CupoCredito>(this.urlProvider.setDesbloquearCupo+"?cliente="+idCliente+"&funcionario="+idFuncionario,{},{headers:this.headers});
  }

}
