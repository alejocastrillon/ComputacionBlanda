import { Sugerencia } from './../../model/Sugerencia.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig, SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-formulario-sugerencia',
  templateUrl: './dialog-formulario-sugerencia.component.html',
  styleUrls: ['./dialog-formulario-sugerencia.component.css']
})
export class DialogFormularioSugerenciaComponent implements OnInit {

  sugerenciaForm: FormGroup;
  isLoading: boolean = false;
  sugerencia: Sugerencia = new Sugerencia();
  nivelesLluvia: Array<SelectItem> = [{label: 'Seco', value: 'seco'}, 
  {label: 'Llovizna', value: 'llovizna'}, 
  {label: 'Lluvia Moderada', value: 'lluvia moderada'}, 
  {label: 'Lluvia Fuerte', value: 'lluvia fuerte'},
  {label: 'Granizada', value: 'granizada'}];
  estadosCarretera: Array<SelectItem> = [{label: 'Sin huecos', value: 'sin huecos'},
  {label: 'Agrietada', value: 'agrietada'},
  {label: 'Con leves huecos', value:'con leves huecos'},
  {label: 'Con grandes huecos', value: 'con grandes huecos'}]

  constructor(private dialogRef: DynamicDialogRef, private data: DynamicDialogConfig, private formBuilder: FormBuilder) { 
    this.sugerencia.latitud = data.data.latitud;
    this.sugerencia.longitud = data.data.longitud;
  }

  ngOnInit() {
    this.validateForm();
  }

  public validateForm(): void {
    this.sugerenciaForm = this.formBuilder.group({
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

}
