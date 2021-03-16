import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPagosClientesRoutingModule } from './modulo-pagos-clientes-routing.module';
import { ListaRecibosClienteComponent } from './lista-recibos-cliente/lista-recibos-cliente.component';
import { DetalleReciboClienteComponent } from './detalle-recibo-cliente/detalle-recibo-cliente.component';


@NgModule({
  declarations: [ListaRecibosClienteComponent, DetalleReciboClienteComponent],
  imports: [
    CommonModule,
    ModuloPagosClientesRoutingModule
  ]
})
export class ModuloPagosClientesModule { }
