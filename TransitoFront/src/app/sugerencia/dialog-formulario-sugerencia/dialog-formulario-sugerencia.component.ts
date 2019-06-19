import { Sugerencia } from './../../model/Sugerencia.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig, SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { SugerenciaService } from '../sugerencia.service';

@Component({
  selector: 'app-dialog-formulario-sugerencia',
  templateUrl: './dialog-formulario-sugerencia.component.html',
  styleUrls: ['./dialog-formulario-sugerencia.component.css']
})
export class DialogFormularioSugerenciaComponent implements OnInit {

  sugerenciaForm: FormGroup;
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

  public generateSugerencia(): void {
    this.service.generateSugerencia(this.sugerencia.latitud, this.sugerencia.longitud, this.sugerencia.estadoCarretera, this.sugerencia.intensidadLluvia).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
