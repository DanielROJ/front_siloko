import { Ciudad } from "./Ciudad";
import { CupoCredito } from "./CupoCredito";
import { EstratoEconomico } from "./EstratoEconomico";
import { RangoAntiguedad } from "./RangoAntiguedad";
import { RangoCantidadProductos } from "./RangoCantidadProductos";

export interface Cliente {
    id:number;
	names:string;
    surNames:string;
    email:string;
	dateRegister:string;
	idDocument:number;
	city:Ciudad;
	rangeOld:RangoAntiguedad;
    classEconomic: EstratoEconomico;
	rangeAmountProducts:RangoCantidadProductos;
	credit:CupoCredito;
  }

  