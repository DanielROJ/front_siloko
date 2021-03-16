import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloGestionClientesRoutingModule } from './modulo-gestion-clientes-routing.module';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { GestionCupoClienteComponent } from './gestion-cupo-cliente/gestion-cupo-cliente.component';
import { ListaSolicitudesCreditoComponent } from './lista-solicitudes-credito/lista-solicitudes-credito.component';


@NgModule({
  declarations: [PerfilClienteComponent, GestionCupoClienteComponent, ListaSolicitudesCreditoComponent],
  imports: [
    CommonModule,
    ModuloGestionClientesRoutingModule
  ]
})
export class ModuloGestionClientesModule { }
