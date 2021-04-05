import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { Cliente } from '../models/Cliente';
import { FuncionarioAlmacen } from '../models/FuncioanarioAlmacen';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers:HttpHeaders;


  constructor(private http:HttpClient, private urlProvider:UrlsApi) {
    this.headers =new HttpHeaders().set('Content-Type','application/json');
   }


   public AuthFuncionario(email:string, codigo):Observable<Funcionario>{
    return this.http.post<Funcionario>(this.urlProvider.authFuncionario,{email:email, code:codigo}, {headers:this.headers});
   }

   public AuthFuncionarioAlmacen(email:string, codigo):Observable<FuncionarioAlmacen>{
     return this.http.post<FuncionarioAlmacen>(this.urlProvider.authFuncionarioAlm,{email:email, code:codigo}, {headers:this.headers});
   }


   public AuthCliente(email:string, codigo):Observable<Cliente>{
     return this.http.post<Cliente>(this.urlProvider.authCliente,{email:email, code:codigo}, {headers:this.headers});
   }

}
