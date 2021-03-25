import { EstadoCupo } from "./EstadoCupo";

export interface CupoCredito {

      id: number;
      totalSizeCredit: number;
      sizeCreditUsed: number;
      sizeTransactionCredit: number;
      dateLastStudyCredit: number;
      statusCredit: EstadoCupo;

}