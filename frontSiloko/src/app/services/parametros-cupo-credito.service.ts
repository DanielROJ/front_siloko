import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { Ciudad } from '../models/Ciudad';
import { Pais } from '../models/Pais';

@Injectable({
  providedIn: 'root'
})
export class ParametrosCupoCreditoService {

  private headers:HttpHeaders;


  constructor(private http:HttpClient, private urlProvider:UrlsApi) {
    this.headers =new HttpHeaders().set('Content-Type','application/json');
   }

   /**
    * Metodo que trae todas la ciudades de la base de datos
    * @returns 
    */
   public getListCiudades():Observable<Ciudad[]>{
     return this.http.get<Ciudad[]>(this.urlProvider.getListCiudades,{headers:this.headers});
   }

   /**
    * Meotodo que trae todas las ciudades filtradas por pais
    * @returns 
    */
   public getListCiudadesByPais(idPais:number):Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.urlProvider.getListCiudadesByPais+"?value="+idPais,{headers:this.headers});
  }


  p/**
    * Meotodo que trae todos los paises
    * @returns 
    */
  public getListPais():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.urlProvider.getListPaises,{headers:this.headers});
  }


}
