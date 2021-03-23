import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoProductoComponent } from './pago-producto/pago-producto.component';

const routes: Routes = [
  {path:"home",pathMatch:"full",component:PagoProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloAlmacenConvenioRoutingModule { }
