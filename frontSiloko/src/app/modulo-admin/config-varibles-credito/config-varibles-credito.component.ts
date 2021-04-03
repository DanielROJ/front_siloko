import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Ciudad } from 'src/app/models/Ciudad';
import { EstratoEconomico } from 'src/app/models/EstratoEconomico';
import { Pais } from 'src/app/models/Pais';
import { ProductoTelefonia } from 'src/app/models/ProductoTelefonia';
import { RangoAntiguedad } from 'src/app/models/RangoAntiguedad';
import { RangoCantidadProductos } from 'src/app/models/RangoCantidadProductos';
import { ClienteService } from 'src/app/services/cliente.service';
import { ParametrosCupoCreditoService } from 'src/app/services/parametros-cupo-credito.service';
import { ReciboService } from 'src/app/services/recibo.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';
import { ValidatorsMessage } from 'src/app/validatorsMessage';

@Component({
  selector: 'app-config-varibles-credito',
  templateUrl: './config-varibles-credito.component.html',
  styleUrls: ['./config-varibles-credito.component.css']
})
export class ConfigVariblesCreditoComponent implements OnInit {

  public formG: FormGroup;
  public messageError: ValidatorsMessage;
  public moneda: String;
  public listCiudades: Ciudad[];
  public listRangosCantidad: RangoCantidadProductos[];
  public listRangoAntiguedad: RangoAntiguedad[];
  public listProductosTelefonia: ProductoTelefonia[];
  public listPaises: Pais[];
  public listEstratoEco: EstratoEconomico[];
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  private mapaPaises = {};


  public configPais = true;
  public puntajePais =0;
  public nombrePais = ""
  public valorPunto =0;

  constructor(private formBuilder: FormBuilder, private alertService: AlertBannerService, 
    private parametrosService: ParametrosCupoCreditoService, private clienteService:ClienteService, private reciboService:ReciboService) {
    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
    localStorage.removeItem("client");

    this.listCiudades = [];
    this.listPaises = [];
    this.listProductosTelefonia = [];
    this.listRangoAntiguedad = [];
    this.listRangosCantidad = [];
    this.listEstratoEco = [];

  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      'idPais': new FormControl('', [Validators.required]),
      'idCiudad': new FormControl('', [Validators.required]),
      'idProducto': new FormControl('', [Validators.required]),
      'idRangoAnt': new FormControl('', [Validators.required]),
      'idRangoCant': new FormControl('', [Validators.required]),
      'idEstrato': new FormControl('', [Validators.required])
    });
  }




  ngOnInit(): void {
    this.dataInitial();
    this.filteredOptions = this.formG.get("idPais").valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  private dataInitial(): void {
    this.parametrosService.getListPais().subscribe(data => {
      this.listPaises = <Pais[]>data;
      this.listPaises.forEach(pais => {
        this.mapaPaises[pais.name.toLocaleLowerCase()] = pais;
        this.options.push(pais.name);
      })
    }, err => {
      if (err.status === 404) {
        this.formG.reset()
        this.formG = this.generateForm();
        this.alertService.messageErrorNofound(" Paises ");
        return;
      } else if (err.status === 500) {
        this.formG.reset()
        this.formG = this.generateForm();
        this.alertService.messageErrorSystem();
        return;
      }
    })


    this.parametrosService.getListEstratoEconomico().subscribe(data => {
      this.listEstratoEco = <EstratoEconomico[]>data;
    }, err => {
      if (err.status === 404) {
        this.alertService.messageErrorNofound(" Productos Telefonia ");
        return;
      } else if (err.status === 500) {
        this.alertService.messageErrorSystem();
      }
    })


    this.parametrosService.getListProductosTelefonia().subscribe(data => {
      this.listProductosTelefonia = <ProductoTelefonia[]>data;
    }, err => {
      if (err.status === 404) {
        this.alertService.messageErrorNofound(" Productos Telefonia ");
        return;
      } else if (err.status === 500) {
        this.alertService.messageErrorSystem();
      }
    })


    this.parametrosService.getListRangoAntiguedad().subscribe(data => {
      this.listRangoAntiguedad = <RangoAntiguedad[]>data;
    }, err => {
      if (err.status === 404) {
        this.alertService.messageErrorNofound(" Rangos de antiguedad ");
        return;
      } else if (err.status === 500) {
        this.alertService.messageErrorSystem();
      }
    })


    this.parametrosService.getListRangoCantidad().subscribe(data => {
      this.listRangosCantidad = <RangoCantidadProductos[]>data;
    }, err => {
      if (err.status === 404) {
        this.alertService.messageErrorNofound(" Rangos de cantidad de productos");
        return;
      } else if (err.status === 500) {
        this.alertService.messageErrorSystem();
      }
    })

  }

  /**
   * Metodo que retorna el puntaje de credito segun el objeto que se escoja en el combo box
   * @param name 
   * @returns 
   */
  public getPuntaje(name: String): number {
    let parametro = this.getFc(name).value
    let puntos = 0;
    if (!parametro) {
      return 0;
    } else {
      puntos = parametro.amountPoints;
    }
    return puntos;
  }

  /**
   * Metodo encargado de hacer la operacion de actualizacion del puntaje 
   * a nivel de base de datos
   */
  public setUpdatePuntaje(name) {
    let parametro = this.getFc(name).value

    if (!parametro) {
      return;
    }


    switch (name) {
      case 'idCiudad': this.parametrosService.updatePuntajeCiudad(parametro).subscribe(data => {
        let index = this.listCiudades.indexOf(parametro);
        this.listCiudades[index] = <Ciudad>data;
        this.getFc(name).setValue(data);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      });
        break;



      case 'idProducto':  this.parametrosService.updatePuntajeProductoTelefonia(parametro).subscribe(data => {
        let index = this.listProductosTelefonia.indexOf(parametro);
        this.listProductosTelefonia[index] = <ProductoTelefonia> data;
        this.getFc(name).setValue(data);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      })
        break;

      case 'idRangoAnt':this.parametrosService.updatePuntajeRangoAntiguedad(parametro).subscribe(data => {
        let index = this.listRangoAntiguedad.indexOf(parametro);
        this.listRangoAntiguedad[index] = <RangoAntiguedad> data;
        this.getFc(name).setValue(data);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      });

        break;


      case 'idRangoCant':this.parametrosService.updatePuntajeRangoCantidad(parametro).subscribe(data => {
        let index = this.listRangosCantidad.indexOf(parametro);
        this.listRangosCantidad[index] = <RangoCantidadProductos> data;
        this.getFc(name).setValue(data);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      });
        break;
      case 'idEstrato': this.parametrosService.updatePuntajeEstratoEconomico(parametro).subscribe(data => {
        let index = this.listEstratoEco.indexOf(parametro);
        this.listEstratoEco[index] = <EstratoEconomico>data;
        this.getFc(name).setValue(data);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      })

        break;

      case 'idPais': 
        let pais = <Pais>this.mapaPaises[parametro.toLocaleLowerCase()];
        pais.amountPoints = this.puntajePais;

        this.parametrosService.updatePuntajePais(pais).subscribe(data => {
        this.mapaPaises[data.name.toLocaleLowerCase()] = data;
        this.puntajePais = data.amountPoints;
        this.getFc(name).setValue(data.name);
        this.alertService.messageSuccesTransaction();
      }, err => {
        if (err.status === 404) {
          this.alertService.messageErrorTransaction("No se pudo actualizar el puntaje");
          return;
        } else if (err.status === 500) {
          this.alertService.messageErrorSystem();
        }
      });
        break;

      default:
        break;
    }
  }

/**
 * Metodo que actualiza el puntaje de casa objeto en el front, 
 * dependera del combo box, modificara el objeto correspondiente
 * @param name 
 * @param value 
 */
  public changePuntaje(name, value) {
    let parametro = this.getFc(name).value
    let index = 0;

    switch (name) {
      case 'idPais':
        this.puntajePais = value;
        break;  
      case 'idCiudad':
        index = this.listCiudades.indexOf(parametro);
        this.listCiudades[index].amountPoints = Number(value);
        break;
      case 'idProducto':
        index = this.listProductosTelefonia.indexOf(parametro);
        this.listProductosTelefonia[index].amountPoints = Number(value);
        break;

      case 'idRangoAnt':
        index = this.listRangoAntiguedad.indexOf(parametro);
        this.listRangoAntiguedad[index].amountPoints = Number(value);
        break;

      case 'idRangoCant':
        index = this.listRangosCantidad.indexOf(parametro);
        this.listRangosCantidad[index].amountPoints = Number(value);
        break;

      case 'idEstrato':
        index = this.listEstratoEco.indexOf(parametro);
        this.listEstratoEco[index].amountPoints = Number(value);
        break;

      default:
        break;
    }


  }


  /**
   * metodo que busca la ciudades asociadas a un pais que se este buscando
   * este se puede modificar en un futuro para traer mas variables dependiendo de cada pais
   */
  public buscarCiudades(): void {
    if (this.formG.get("idPais").valid) {
      /*
      this.buscando = true; 
      this.mode = <ProgressSpinnerMode> 'indeterminate';
      */

      let nombrePais = String(this.formG.get("idPais").value).toLocaleLowerCase();

      let paisTmp = <Pais>this.mapaPaises[nombrePais];

      if (paisTmp === undefined) {
        this.formG.get("idCiudad").setValue('');
        this.listCiudades = [];
        this.alertService.messageErrorNofound(" Pais ");
        this.configPais= true;
        this.puntajePais = 0;
      } else {

        
        let idPais = paisTmp.id;
        this.configPais= false;
        this.puntajePais = paisTmp.amountPoints
        this.moneda = paisTmp.typeCoin;
        this.nombrePais = paisTmp.name
        this.valorPunto = paisTmp.valuePoint;

        this.parametrosService.getListCiudadesByPais(idPais).subscribe((data) => {
          this.formG.get("idCiudad").setValue('')
          this.listCiudades = <Ciudad[]>data;
          this.alertService.messageSuccesTransaction();
        }, err => {
          if (err.status === 404) {
            this.formG.reset()
            this.formG = this.generateForm();
            this.alertService.messageErrorNofound(" Ciudades ");
            return;
          } else if (err.status === 500) {
            this.formG.reset()
            this.formG = this.generateForm();
            this.alertService.messageErrorSystem();
          }
        })
      }

    }
  }



  public getValorPunto(name):number{
    let parametro = this.getFc(name).value
    let pais = <Pais> this.mapaPaises[parametro.toLocaleLowerCase()];
    if(this.configPais || pais === undefined) return 0;
    return pais.valuePoint;
  }

  public updateValorPunto(name, value):void{
    let parametro = this.getFc(name).value
    if(this.configPais) return;
    this.valorPunto =value
    this.mapaPaises[parametro.toLocaleLowerCase()].valuePoint = value;
  }

  public saveValorPunto(name):void{
    let parametro = this.getFc(name).value
    let pais = <Pais>this.mapaPaises[parametro.toLocaleLowerCase()];

    this.parametrosService.updateValorPuntoPais(pais).subscribe(data => {
    this.getFc(name).setValue(data.name);
    this.alertService.messageSuccesTransaction();
  }, err => {
    if (err.status === 404) {
      this.alertService.messageErrorTransaction("No se pudo actualizar el valor por punto");
      return;
    } else if (err.status === 500) {
      this.alertService.messageErrorSystem();
    }
  });
  }



ExecuteGenerarCupo():void{
  this.clienteService.ExecuteProcesoMasivoGenerarCupo().subscribe(()=>{
    this.alertService.messageSuccesTransaction();
  }, err => {
    if (err.status === 404) {
      this.alertService.messageErrorTransaction("No se pudo ejecutar el proceso masivo");
      return;
    } else if (err.status === 500) {
      this.alertService.messageErrorSystem();
    }
  })
}


ExecuteGenerarRecibos():void{
  
  this.reciboService.ExecuteGenerarRecibos().subscribe(()=>{
    this.alertService.messageSuccesTransaction();
  }, err => {
    if (err.status === 404) {
      this.alertService.messageErrorTransaction("No se pudo ejecutar el proceso masivo");
      return;
    } else if (err.status === 500) {
      this.alertService.messageErrorSystem();
    }
  })


}








  public getFc(name) {
    return this.formG.get(name);
  }

  public hasErros(name) {
    return (this.getFc(name).dirty || this.getFc(name).touched) && this.getFc(name).errors;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



}
