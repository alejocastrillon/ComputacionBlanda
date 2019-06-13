import { MenuModule } from 'primeng/menu';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule, CalendarModule, SharedModule, MegaMenuModule, ButtonModule, DialogModule, DialogService, InputTextModule, SidebarModule, PanelMenuModule, DropdownModule, ProgressBarModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { RegistrarAccidenteComponent } from './accidentes/registrar-accidente/registrar-accidente.component';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { RegistroVelocidadComponent } from './registro-velocidad/registro-velocidad.component';
import { DialogRegistroComponent } from './registro-velocidad/dialog-registro/dialog-registro.component';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { DialogFormularioSugerenciaComponent } from './sugerencia/dialog-formulario-sugerencia/dialog-formulario-sugerencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AccidentesComponent,
    RegistrarAccidenteComponent,
    RegistroVelocidadComponent,
    DialogRegistroComponent,
    SugerenciaComponent,
    DialogFormularioSugerenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
    AppRoutingModule,
    ChartModule,
    CalendarModule,
    SharedModule,
    DropdownModule,
    ProgressBarModule,
    MegaMenuModule,
    MenuModule,
    SidebarModule,
    PanelMenuModule,
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ],
  entryComponents:[
    RegistrarAccidenteComponent,
    DialogRegistroComponent,
    DialogFormularioSugerenciaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
