import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPagosClientesRoutingModule } from './modulo-pagos-clientes-routing.module';
import { ListaRecibosClienteComponent } from './lista-recibos-cliente/lista-recibos-cliente.component';
import { DetalleReciboClienteComponent } from './Dialogs/detalle-recibo-cliente/detalle-recibo-cliente.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ListaRecibosClienteComponent, DetalleReciboClienteComponent],
  imports: [
    CommonModule,
    ModuloPagosClientesRoutingModule,
    ShareModule
  ]
})
export class ModuloPagosClientesModule { }
