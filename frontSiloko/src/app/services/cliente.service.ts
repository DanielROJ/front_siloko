import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlsApi } from 'src/urls-api';
import { Cliente } from '../models/Cliente';
import { ClienteProductosTel } from '../models/ClienteProductosTel';
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

   /**
    * Busca un cliente segun su id en la base de datos
    * @param idCliente 
    * @returns 
    */
   public getClienteById(idCliente:number): Observable<Cliente>{
    return this.http.get<Cliente>(this.urlProvider.getClienteById+"?value="+idCliente,{headers:this.headers});
  }

  /**
   * Bloquea el cupo de un cliente 
   * @param idCliente 
   * @param idFuncionario 
   * @returns 
   */
   public setBloquearCupoCredito(idCliente:Number, idFuncionario:Number): Observable<CupoCredito>{
     return this.http.post<CupoCredito>(this.urlProvider.setBloquearCupo+"?cliente="+idCliente+"&funcionario="+idFuncionario,{},{headers:this.headers});
   }

   /**
    * Desbloquea el cupo d eun cliente
    * @param idCliente 
    * @param idFuncionario 
    * @returns 
    */
   public setDesbloquearCupoCredito(idCliente:Number, idFuncionario:Number): Observable<CupoCredito>{
    return this.http.post<CupoCredito>(this.urlProvider.setDesbloquearCupo+"?cliente="+idCliente+"&funcionario="+idFuncionario,{},{headers:this.headers});
  }

  /**
   * Genera el estudio automatico de credito segun los parametros
   * @param idCliente 
   * @param idFuncionario 
   * @returns 
   */
  public setGenerarCupoCredito(idCliente:Number, idFuncionario:Number): Observable<CupoCredito>{
    return this.http.post<CupoCredito>(this.urlProvider.setGenerarCupo+"?cliente="+idCliente+"&funcionario="+idFuncionario,{},{headers:this.headers});
  }

  /**
   * Permite asignar un cupo manual al credito 
   * @param idFuncionario 
   * @param cupoCredito 
   * @returns 
   */
  public setAsginarCupoCreditoManual(idFuncionario:Number, cupoCredito: CupoCredito): Observable<CupoCredito>{
    return this.http.put<CupoCredito>(this.urlProvider.setAsignarCupoManual+"?funcionario="+idFuncionario,cupoCredito,{headers:this.headers});
  }

  /**
   * Metodo que petmite traer todos los productos de telfonia que tiene contratados
   * @param idCliente 
   * @returns 
   */
  public getClienteProductosTel(idCliente:number):Observable<ClienteProductosTel[]>{
    return this.http.get<ClienteProductosTel[]>(this.urlProvider.getClienteProductosTel+"?value="+idCliente,{headers:this.headers});
  }


  public ExecuteProcesoMasivoGenerarCupo():Observable<any>{
    return this.http.post(this.urlProvider.ExecuteProcesoGenerarCupo,{},{});
  }

}
