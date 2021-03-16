import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';



@NgModule({
  declarations: [PerfilComponentComponent, VistaGeneralComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
