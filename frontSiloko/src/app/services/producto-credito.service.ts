import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { ProductoCredito } from '../models/ProductoCredito';

@Injectable({
  providedIn: 'root'
})
export class ProductoCreditoService {

  private headers: HttpHeaders;


  constructor(private http: HttpClient, private urlProvider: UrlsApi) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }


  public getProductoCreditoBySilokoCode(silokoCode:string):Observable<ProductoCredito>{
    return this.http.get<ProductoCredito>(this.urlProvider.getProductoCreditoBySilokoCode+"?value="+silokoCode.toLocaleLowerCase(), {headers:this.headers});
  }



}
