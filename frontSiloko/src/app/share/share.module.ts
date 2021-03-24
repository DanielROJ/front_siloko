import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AlertBannerService } from './services_share/alert-banner.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ClienteService } from '../services/cliente.service';

@NgModule({
  declarations: [PerfilComponentComponent, VistaGeneralComponent],
  imports: [
    CommonModule
  ],
  exports:[
  
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    PerfilComponentComponent, 
    VistaGeneralComponent,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule],
    providers:[AlertBannerService,ClienteService]
})
export class ShareModule { }
