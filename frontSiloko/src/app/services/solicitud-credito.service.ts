import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { SolicitudCredito } from '../models/SolicitudCredito';

@Injectable({
  providedIn: 'root'
})
export class SolicitudCreditoService {
  private headers: HttpHeaders;


  constructor(private http: HttpClient, private urlProvider: UrlsApi) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }



  public setGenerarSolicitudCredito(solicitud:SolicitudCredito):Observable<SolicitudCredito>{
   return  this.http.post<SolicitudCredito>(this.urlProvider.setGenerarSolicitudCredito,solicitud,{headers:this.headers});
  }

  public getSolicitudByCodeAndDocClient(codigoCredito:string, documento:number):Observable<SolicitudCredito>{
    return this.http.get<SolicitudCredito>(this.urlProvider.getSolicitudByCodeAndDocClient+"?codigo="+codigoCredito+"&documento="+documento);
  }

  public setFinanciacionSolicitudCredito(idSolicitud:number, idFuncionarioAlm:number, numeroCuotas:number):Observable<boolean>{
    return this.http.put<boolean>(
      this.urlProvider.setFinanciacionSolicitudCredito+"?solicitud="+idSolicitud+"&funcionarioA="+idFuncionarioAlm+"&cuotas="+numeroCuotas,
      {},{headers:this.headers});
  }

  public getListSolicitudCreditoByIdClient(idCliente:number, nPage:number, nRows):Observable<any>{
    return this.http.get(
      this.urlProvider.getSolicitudCreditByIdClient+"?id="+idCliente+"&nPage="+nPage+"&nRows="+nRows,{headers:this.headers,observe:"response"});
  }




}

