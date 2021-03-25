import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { CupoCredito } from '../models/CupoCredito';

@Injectable({
  providedIn: 'root'
})
export class CupoCreditoService {

  private headers:HttpHeaders;


  constructor(private http:HttpClient, private urlProvider:UrlsApi) {
    this.headers =new HttpHeaders().set('Content-Type','application/json');
   }




  



}
