import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
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


@NgModule({
  declarations: [PerfilComponentComponent, VistaGeneralComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports:[
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatRadioModule],
    providers:[AlertBannerService]
})
export class ShareModule { }
