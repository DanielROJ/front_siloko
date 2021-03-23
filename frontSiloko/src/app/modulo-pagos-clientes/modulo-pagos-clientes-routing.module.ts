import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaRecibosClienteComponent } from './lista-recibos-cliente/lista-recibos-cliente.component';

const routes: Routes = [
  {path:'home', pathMatch:"full", component:ListaRecibosClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagosClientesRoutingModule { }
