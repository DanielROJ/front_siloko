import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloAdminRoutingModule } from './modulo-admin-routing.module';
import { ConfigVariblesCreditoComponent } from './config-varibles-credito/config-varibles-credito.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ConfigVariblesCreditoComponent],
  imports: [
    CommonModule,
    ModuloAdminRoutingModule,
    ShareModule
  ]
})
export class ModuloAdminModule { }
