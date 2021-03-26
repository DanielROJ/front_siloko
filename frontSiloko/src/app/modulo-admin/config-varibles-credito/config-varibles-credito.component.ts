import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Ciudad } from 'src/app/models/Ciudad';
import { Pais } from 'src/app/models/Pais';
import { ParametrosCupoCreditoService } from 'src/app/services/parametros-cupo-credito.service';
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
  public listPaises: Pais[];
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  private mapaPaises = {};



  constructor(private formBuilder: FormBuilder, private alertService: AlertBannerService, private parametrosService: ParametrosCupoCreditoService) {
    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
    localStorage.removeItem("client");
  }

  ngOnInit(): void {
    this.dataInitial();
    this.filteredOptions = this.formG.get("idPais").valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      'idPais': new FormControl('', [Validators.required])
    });
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
      }
    })
  }


  public onSubmit(): void {
    if (this.formG.valid) {
      /*
      this.buscando = true; 
      this.mode = <ProgressSpinnerMode> 'indeterminate';
      */
      let nombrePais = String(this.formG.get("idPais").value).toLocaleLowerCase();

      let paisTmp = <Pais>this.mapaPaises[nombrePais];

      if (paisTmp === null) {
        this.alertService.messageErrorNofound(" Pais ");
      } else {
        let idPais = paisTmp.id;
        this.parametrosService.getListCiudadesByPais(idPais).subscribe((data) => {
          this.listCiudades = <Ciudad[]>data;
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
