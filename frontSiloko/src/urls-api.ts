import { environment } from "./environments/environment"

export class UrlsApi {

    private host = environment.baseUrl;


    public readonly getClienteById = String(this.host+"/cliente");
    public readonly getClienteByDocumento = String(this.host+"/cliente/documentoId");
    public readonly setBloquearCupo = String(this.host+"/cliente/cupoCredito/bloquear")
    public readonly setDesbloquearCupo = String(this.host+"/cliente/cupoCredito/desbloquear")



}
