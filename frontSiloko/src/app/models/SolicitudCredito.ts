import { Cliente } from "./Cliente";
import { EstadoCredito } from "./EstadoCredito";
import { FuncionarioAlmacen } from "./FuncioanarioAlmacen";
import { Funcionario } from "./Funcionario";
import { ProductoCredito } from "./ProductoCredito";

export interface SolicitudCredito {
    
    id:number;
    codeCredito:string;
	dateRequest:Date;
    datefinalRequest:Date;
    numFees:number;
    numFeesPaid:number;
	dateLastPaid:Date;
	client:Cliente;
	product:ProductoCredito;
	employManager:Funcionario;
	employStore:FuncionarioAlmacen;
	status:EstadoCredito;

}