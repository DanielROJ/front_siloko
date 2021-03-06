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
    public readonly getClienteProductosTel = String(this.host + "/cliente/productosTel")
    public readonly ExecuteProcesoGenerarCupo = String(this.host + "/cliente/masivo")

    //------------------------------END-POINT---Solicitud--Credito----------------------////////////
    public readonly  setGenerarSolicitudCredito = String(this.host+"/solicitudCredito/generar")
    public readonly  getSolicitudByCodeAndDocClient = String(this.host+"/solicitudCredito/codigoF")
    public readonly  setFinanciacionSolicitudCredito = String(this.host+"/solicitudCredito/financiar") 
    public readonly  getSolicitudCreditByIdClient = String(this.host+"/solicitudCredito/cliente/list") 

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

     //------------------------------END-POINT---Recibos----------------------////////////
     public readonly  getListRecibosByIdClient = String(this.host+"/recibo/cliente/list") 
     public readonly ExecuteProcesoGenerarRecibos = String(this.host+"/recibo/masivo")
     public readonly getListSolicitudCreditoRecibo = String(this.host+"/recibo/solicitudes/list")
     public readonly getListProductosRecibo = String(this.host+"/recibo/productos/list")

     
     //------------------------------END-POINT---Login----------------------////////////
     public readonly authFuncionario= String(this.host+"/login/funcionario") 
     public readonly authFuncionarioAlm= String(this.host+"/login/funcionarioAlmacen") 
     public readonly authCliente= String(this.host+"/login/cliente")
      
}
