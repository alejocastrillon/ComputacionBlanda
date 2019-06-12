import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sugerencia } from 'src/app/model/Sugerencia.model';

@Component({
  selector: 'app-dialog-formulario-sugerencia',
  templateUrl: './dialog-formulario-sugerencia.component.html',
  styleUrls: ['./dialog-formulario-sugerencia.component.css']
})
export class DialogFormularioSugerenciaComponent implements OnInit {

  sugerencia: Sugerencia;
  sugerenciaForm: FormGroup

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
      'intensidadLLuvia': [this.sugerencia.intensidadLluvia, [
        Validators.required
      ]],
      'estadoCarretera': [this.sugerencia.estadoCarretera, [
        Validators.required
      ]]
    });
  }

}
