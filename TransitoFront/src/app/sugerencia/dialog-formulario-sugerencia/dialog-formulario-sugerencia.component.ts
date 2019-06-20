import { Sugerencia } from './../../model/Sugerencia.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig, SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { SugerenciaService } from '../sugerencia.service';
import { VelocidadPunto } from 'src/app/model/VelocidadPunto.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-formulario-sugerencia',
  templateUrl: './dialog-formulario-sugerencia.component.html',
  styleUrls: ['./dialog-formulario-sugerencia.component.css']
})
export class DialogFormularioSugerenciaComponent implements OnInit {

  sugerenciaForm: FormGroup;
  velocidades: Array<VelocidadPunto> = [];
  punto: VelocidadPunto = new VelocidadPunto();
  isLoading: boolean = false;
  sugerencia: Sugerencia = new Sugerencia();
  nivelesLluvia: Array<SelectItem> = [{label: 'Seco', value: 1}, 
  {label: 'Llovizna', value: 3},
  {label: 'Lluvia Fuerte', value: 7}];
  estadosCarretera: Array<SelectItem> = [{label: 'Malo', value: 1},
  {label: 'Regular', value: 3},
  {label: 'Bueno', value: 7}]

  constructor(private dialogRef: DynamicDialogRef, private data: DynamicDialogConfig, private formBuilder: FormBuilder, private service: SugerenciaService) { 
    this.sugerencia.latitud = data.data.latitud;
    this.sugerencia.longitud = data.data.longitud;
    this.velocidades = data.data.velocidades;
  }

  ngOnInit() {
    this.validateForm();
  }

  public validateForm(): void {
    this.sugerenciaForm = this.formBuilder.group({
      'punto': [this.punto, [
        Validators.required
      ]],
      'latitud': [this.sugerencia.latitud, [
        Validators.required
      ]],
      'longitud': [this.sugerencia.longitud, [
        Validators.required
      ]],
      'intensidadLluvia': [this.sugerencia.intensidadLluvia, [
        Validators.required
      ]],
      'estadoCarretera': [this.sugerencia.estadoCarretera, [
        Validators.required
      ]]
    });
  }

  public cancelSave(): void {
    this.dialogRef.close();
  }

  public generateSugerencia(): void {
    this.service.generateSugerencia(this.sugerencia.latitud, this.sugerencia.longitud, this.sugerencia.estadoCarretera, this.sugerencia.intensidadLluvia).subscribe( res => {
      console.log(res);
      if (res.estado == 1) {
        Swal.fire('Riesgo Bajo', 'La velocidad recomedada es de: ' + res.velocidad + ' Km/h', 'success');
      } else if (res.estado == 2) {
        Swal.fire('Riesgo Medio', 'La velocidad recomedada es de: ' + res.velocidad + ' Km/h', 'info');
      } else if (res.estado == 3) {
        Swal.fire('Riesgo Medio Alto', 'La velocidad recomedada es de: ' + res.velocidad + ' Km/h', 'warning');
      } else {
        Swal.fire('Riesgo Alto', 'La velocidad recomedada es de: ' + res.velocidad + ' Km/h', 'error');
      }
    }, err => {
      console.log(err);
    });
  }

  public puntoChange(event): void {
    this.sugerencia.latitud = event.latitud;
    this.sugerencia.longitud = event.longitud;
  }

}
