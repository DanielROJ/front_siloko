import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { Ciudad } from '../models/Ciudad';
import { EstratoEconomico } from '../models/EstratoEconomico';
import { Pais } from '../models/Pais';
import { ProductoTelefonia } from '../models/ProductoTelefonia';
import { RangoAntiguedad } from '../models/RangoAntiguedad';
import { RangoCantidadProductos } from '../models/RangoCantidadProductos';

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


  /**
    * Meotodo que trae todos los paises
    * @returns 
    */
  public getListPais():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.urlProvider.getListPaises,{headers:this.headers});
  }

  /**
    * Meotodo que trae todos los productos de telefonia de siloko mobile 
    * @returns 
    */
  public getListProductosTelefonia():Observable<ProductoTelefonia[]>{
    return this.http.get<ProductoTelefonia[]>(this.urlProvider.getListProductosTelefonia,{headers:this.headers});
  }


  /**
    * Meotodo que trae todos los rangos de antiguedad que puede tener un cliente
    * @returns 
    */
   public getListRangoAntiguedad():Observable<RangoAntiguedad[]>{
    return this.http.get<RangoAntiguedad[]>(this.urlProvider.getListRangoAntiguedad,{headers:this.headers});
  }


  /**
    * Meotodo que trae todos los rangos de cantidad de productos
    * @returns 
    */
   public getListRangoCantidad():Observable<RangoCantidadProductos[]>{
    return this.http.get<RangoCantidadProductos[]>(this.urlProvider.getListRangoCantidadProductos,{headers:this.headers});
  }


  /**
    * Meotodo que trae todos los rangos de cantidad de productos
    * @returns 
    */
   public getListEstratoEconomico():Observable<EstratoEconomico[]>{
    return this.http.get<EstratoEconomico[]>(this.urlProvider.getListEstratoEconomico,{headers:this.headers});
  }


/**
 * Metodo que actualiza el puntaje de credito de alguna ciudad.
 * @param ciudad 
 * @returns 
 */
 public updatePuntajePais(pais:Pais):Observable<Pais>{
  return this.http.put<Pais>(this.urlProvider.setUpdatePuntajePais,pais,{headers:this.headers});
}





/**
 * Metodo que actualiza el puntaje de credito de alguna ciudad.
 * @param ciudad 
 * @returns 
 */
  public updatePuntajeCiudad(ciudad:Ciudad):Observable<Ciudad>{
    return this.http.put<Ciudad>(this.urlProvider.setUpdatePuntajeCiudad,ciudad,{headers:this.headers});
  }


/**
 * Metodo que actualiza el puntaje de un estrato economico
 * @param ciudad 
 * @returns 
 */
 public updatePuntajeEstratoEconomico(estrato:EstratoEconomico):Observable<EstratoEconomico>{
  return this.http.put<EstratoEconomico>(this.urlProvider.setUpdatePuntajeEstratoEconomico,estrato,{headers:this.headers});
}


  /**
 * Metodo que actualiza el puntaje de un rango de antiguedad
 * @param ciudad 
 * @returns 
 */
 public updatePuntajeRangoAntiguedad(rango:RangoAntiguedad):Observable<RangoAntiguedad>{
  return this.http.put<RangoAntiguedad>(this.urlProvider.setUpdatePuntajeRangoAntiguedad,rango,{headers:this.headers});
}


/**
 * Metodo que actualiza el puntaje de un producto de telfonia
 * @param ciudad 
 * @returns 
 */
 public updatePuntajeProductoTelefonia(producto:ProductoTelefonia):Observable<ProductoTelefonia>{
  return this.http.put<ProductoTelefonia>(this.urlProvider.setUpdatePuntajeProductoTel,producto,{headers:this.headers});
}

/**
 * Metodo que actualiza el puntaje de un producto de telfonia
 * @param ciudad 
 * @returns 
 */
 public updatePuntajeRangoCantidad(rango:RangoCantidadProductos):Observable<RangoCantidadProductos>{
  return this.http.put<RangoCantidadProductos>(this.urlProvider.setUpdatePuntajeRangoCantidadProductos,rango,{headers:this.headers});
}





}
