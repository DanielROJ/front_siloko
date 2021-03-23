import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloGestionClientesRoutingModule } from './modulo-gestion-clientes-routing.module';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { GestionCupoClienteComponent } from './gestion-cupo-cliente/gestion-cupo-cliente.component';
import { ListaSolicitudesCreditoComponent } from './lista-solicitudes-credito/lista-solicitudes-credito.component';
import { BusquedaClientesComponent } from './busqueda-clientes/busqueda-clientes.component';
import { MenuTabsGestionComponent } from './menu-tabs-gestion/menu-tabs-gestion.component';
import { ShareModule } from '../share/share.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PerfilClienteComponent, GestionCupoClienteComponent, ListaSolicitudesCreditoComponent, BusquedaClientesComponent, MenuTabsGestionComponent],
  imports: [
    ModuloGestionClientesRoutingModule,
    ShareModule
  ]
})
export class ModuloGestionClientesModule { }
