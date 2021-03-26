import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigVariblesCreditoComponent } from './config-varibles-credito/config-varibles-credito.component';

const routes: Routes = [
  {path:'home', component:ConfigVariblesCreditoComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloAdminRoutingModule { }
