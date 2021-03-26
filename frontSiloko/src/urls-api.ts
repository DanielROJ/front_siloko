import { environment } from "./environments/environment"

export class UrlsApi {

    private host = environment.baseUrl;

     //------------------------------END-POINT---Clientes ----------------------////////////
    public readonly getClienteById = String(this.host+"/cliente");
    public readonly getClienteByDocumento = String(this.host+"/cliente/documentoId");
    public readonly setBloquearCupo = String(this.host+"/cliente/cupoCredito/bloquear")
    public readonly setDesbloquearCupo = String(this.host+"/cliente/cupoCredito/desbloquear")
    public readonly setGenerarCupo = String(this.host+"/cliente/cupoCredito/generar")




    //------------------------------END-POINT---CIUDADES ----------------------////////////
    public readonly getListCiudades = String(this.host+"/ciudad/list")
    public readonly getListCiudadesByPais = String(this.host+"/ciudad/pais")





    //------------------------------END-POINT---CIUDADES ----------------------////////////
    public readonly getListPaises = String(this.host+"/pais/list")

}
