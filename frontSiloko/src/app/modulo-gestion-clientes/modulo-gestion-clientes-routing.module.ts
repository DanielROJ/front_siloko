import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaClientesComponent } from './busqueda-clientes/busqueda-clientes.component';
import { MenuTabsGestionComponent } from './menu-tabs-gestion/menu-tabs-gestion.component';

const routes: Routes = [
  {path:'home', component:BusquedaClientesComponent, pathMatch:"full"},
  {path:'menu', component:MenuTabsGestionComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloGestionClientesRoutingModule { }
