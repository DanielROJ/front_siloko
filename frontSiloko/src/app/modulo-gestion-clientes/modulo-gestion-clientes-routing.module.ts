import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaClientesComponent } from './busqueda-clientes/busqueda-clientes.component';
import { GenerarSolicitudComponent } from './generar-solicitud/generar-solicitud.component';
import { MenuTabsGestionComponent } from './menu-tabs-gestion/menu-tabs-gestion.component';

const routes: Routes = [
  {path:'home', component:BusquedaClientesComponent, pathMatch:"full"},
  {path:'menu', component:MenuTabsGestionComponent, pathMatch:"full"},
  {path:'solicitud', component:GenerarSolicitudComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloGestionClientesRoutingModule { }
