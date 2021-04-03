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
import {MatTabsModule} from '@angular/material/tabs';
import { ParametrosCupoCreditoService } from '../services/parametros-cupo-credito.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './footer/footer.component';
import { ProductoCreditoService } from '../services/producto-credito.service';
import { SolicitudCreditoService } from '../services/solicitud-credito.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReciboService } from '../services/recibo.service';

@NgModule({
  declarations: [PerfilComponentComponent, VistaGeneralComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    CurrencyPipe, 
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
    MatProgressSpinnerModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatPaginatorModule],
    providers:[AlertBannerService,ClienteService,ParametrosCupoCreditoService, ProductoCreditoService, SolicitudCreditoService,ReciboService]
})
export class ShareModule { }
