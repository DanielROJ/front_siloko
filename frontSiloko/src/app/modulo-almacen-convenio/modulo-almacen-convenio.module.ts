import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloAlmacenConvenioRoutingModule } from './modulo-almacen-convenio-routing.module';
import { PagoProductoComponent } from './pago-producto/pago-producto.component';


@NgModule({
  declarations: [PagoProductoComponent],
  imports: [
    CommonModule,
    ModuloAlmacenConvenioRoutingModule
  ]
})
export class ModuloAlmacenConvenioModule { }
