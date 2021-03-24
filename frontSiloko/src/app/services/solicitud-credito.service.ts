import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlsApi } from 'src/urls-api';

@Injectable({
  providedIn: 'root'
})
export class SolicitudCreditoService {
  private headers: HttpHeaders;


  constructor(private http: HttpClient, private urlProvider: UrlsApi) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }
}
