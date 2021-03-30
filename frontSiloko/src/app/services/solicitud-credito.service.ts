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
}
