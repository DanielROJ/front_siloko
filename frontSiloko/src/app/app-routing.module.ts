import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';


const routes: Routes = [

  {path:'',pathMatch:'full', component:LoginComponentComponent},
  {path:'siloko',loadChildren: () => import('./modulo-gestion-clientes/modulo-gestion-clientes.module').then(m => m.ModuloGestionClientesModule)},
  {path:'cliente',loadChildren: () => import('./modulo-pagos-clientes/modulo-pagos-clientes.module').then(m => m.ModuloPagosClientesModule)},
  {path:'almacen',loadChildren: () => import('./modulo-almacen-convenio/modulo-almacen-convenio.module').then(m => m.ModuloAlmacenConvenioModule)},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
