import { AccidentesComponent } from './accidentes/accidentes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroVelocidadComponent } from './registro-velocidad/registro-velocidad.component';

const routes: Routes = [
  {path: '', redirectTo: '/accidentes', pathMatch: 'full'},
  {path: 'accidentes',  component: AccidentesComponent},
  {path: 'registro-velocidad', component: RegistroVelocidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
