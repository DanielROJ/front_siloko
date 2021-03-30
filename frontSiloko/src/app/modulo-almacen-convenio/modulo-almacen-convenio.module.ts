import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloAlmacenConvenioRoutingModule } from './modulo-almacen-convenio-routing.module';
import { PagoProductoComponent } from './pago-producto/pago-producto.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [PagoProductoComponent],
  imports: [
    CommonModule,
    ModuloAlmacenConvenioRoutingModule,
    ShareModule
  ]
})
export class ModuloAlmacenConvenioModule { }
