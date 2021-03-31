import { environment } from "./environments/environment"

export class UrlsApi {

    private host = environment.baseUrl;

    //------------------------------END-POINT---Clientes ----------------------////////////
    public readonly getClienteById = String(this.host + "/cliente");
    public readonly getClienteByDocumento = String(this.host + "/cliente/documentoId");
    public readonly setBloquearCupo = String(this.host + "/cliente/cupoCredito/bloquear")
    public readonly setDesbloquearCupo = String(this.host + "/cliente/cupoCredito/desbloquear")
    public readonly setGenerarCupo = String(this.host + "/cliente/cupoCredito/generar")
    public readonly setAsignarCupoManual = String(this.host + "/cliente/cupoCredito/manual")

    //------------------------------END-POINT---Solicitud--Credito----------------------////////////
    public readonly  setGenerarSolicitudCredito = String(this.host+"/solicitudCredito/generar")
    public readonly  getSolicitudByCodeAndDocClient = String(this.host+"/solicitudCredito/codigoF")
    public readonly  setFinanciacionSolicitudCredito = String(this.host+"/solicitudCredito/financiar") 

    //------------------------------END-POINT---CIUDADES ----------------------////////////
    public readonly getListCiudades = String(this.host + "/ciudad/list")
    public readonly getListCiudadesByPais = String(this.host + "/ciudad/pais")
    public readonly setUpdatePuntajeCiudad = String(this.host + "/ciudad/puntaje")


    //------------------------------END-POINT---Piases ----------------------////////////
    public readonly getListPaises = String(this.host + "/pais/list")
    public readonly setUpdatePuntajePais = String(this.host + "/pais/puntaje")
    public readonly setUpdateValorPunto = String(this.host + "/pais/valorPunto")


    //------------------------------END-POINT---Producto de Telefonia ----------------------////////////
    public readonly getListProductosTelefonia = String(this.host + "/planTelefonia/list")
    public readonly setUpdatePuntajeProductoTel = String(this.host + "/planTelefonia/puntaje")

    //------------------------------END-POINT---Rango de antigueddad----------------------////////////
    public readonly getListRangoAntiguedad = String(this.host + "/rangoAntiguedad/list")
    public readonly setUpdatePuntajeRangoAntiguedad = String(this.host + "/rangoAntiguedad/puntaje")


    //------------------------------END-POINT---Rango cantidad de productos----------------------////////////
    public readonly getListRangoCantidadProductos = String(this.host + "/rangoCantidad/list")
    public readonly setUpdatePuntajeRangoCantidadProductos = String(this.host + "/rangoCantidad/puntaje")

    //------------------------------END-POINT---Estrato economico----------------------////////////
    public readonly getListEstratoEconomico = String(this.host + "/estrato/list")
    public readonly setUpdatePuntajeEstratoEconomico = String(this.host + "/estrato/puntaje")


     //------------------------------END-POINT---Producto credito----------------------////////////
     public readonly getProductoCreditoBySilokoCode = String(this.host + "/productoCredito/codigoSiloko");

}
