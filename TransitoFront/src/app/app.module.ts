import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule, CalendarModule, SharedModule, MegaMenuModule, ButtonModule, DialogModule, DialogService, InputTextModule } from 'primeng/primeng';
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

@NgModule({
  declarations: [
    AppComponent,
    AccidentesComponent,
    RegistrarAccidenteComponent,
    RegistroVelocidadComponent,
    DialogRegistroComponent
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
    MegaMenuModule,
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ],
  entryComponents:[
    RegistrarAccidenteComponent,
    DialogRegistroComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
