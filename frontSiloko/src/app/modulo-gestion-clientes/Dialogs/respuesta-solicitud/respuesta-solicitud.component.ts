import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolicitudCredito } from 'src/app/models/SolicitudCredito';

@Component({
  selector: 'app-respuesta-solicitud',
  templateUrl: './respuesta-solicitud.component.html',
  styleUrls: ['./respuesta-solicitud.component.css']
})
export class RespuestaSolicitudComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RespuestaSolicitudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SolicitudCredito) {
  
    }
  ngOnInit(): void {
  }

}
