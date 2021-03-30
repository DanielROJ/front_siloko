import { CurrencyPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CupoCredito } from 'src/app/models/CupoCredito';
import { ClienteService } from 'src/app/services/cliente.service';
import { AlertBannerService } from 'src/app/share/services_share/alert-banner.service';

@Component({
  selector: 'app-cupo-manual',
  templateUrl: './cupo-manual.component.html',
  styleUrls: ['./cupo-manual.component.css']
})
export class CupoManualComponent implements OnInit {
  saldo: string;
  idCuenta: number;
  formG: FormGroup;

  public moneda = ""

  constructor(private dialogRef: MatDialogRef<CupoManualComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formB: FormBuilder, private alertService:AlertBannerService, private clienteService:ClienteService) {
      this.moneda = this.data.moneda;
    this.formG = this.createForm();

  }


  

  save() {
    if(this.formG.valid){
      let valor = Number(this.formG.get("setSaldo").value)
      let cupo = <CupoCredito> {id:this.data.credito};
      cupo.totalSizeCredit = valor;
      this.clienteService.setAsginarCupoCreditoManual(2,cupo).subscribe(data=>{
        this.dialogRef.close({ data: <CupoCredito> data });
        this.alertService.messageSuccesTransaction();
      },err=>{
        this.formG.get("setSaldo").setValue(0);
        if(err.status === 404 || err.status === 400){
          this.alertService.messageErrorTransaction("No se pudo asignar el cupo manual")
        }else if(err.status === 500){
          this.alertService.messageErrorSystem();
        }
      })

    }


  }

  public createForm(): FormGroup {
    return this.formB.group({
      setSaldo: new FormControl(undefined, [Validators.required, Validators.min(0)])
    })
  }


  ngOnInit(): void {
  }

}
