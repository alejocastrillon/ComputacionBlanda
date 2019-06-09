import { RegistroVelocidadService } from './../registro-velocidad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { VelocidadPunto } from './../../model/VelocidadPunto.model';
import { Component, OnInit } from '@angular/core';
import {tileLayer} from 'leaflet';
import * as L from 'leaflet';
import Swal from 'sweetalert2';

interface marker {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-dialog-registro',
  templateUrl: './dialog-registro.component.html',
  styleUrls: ['./dialog-registro.component.css']
})
export class DialogRegistroComponent implements OnInit {

  map;
  coordClic;
  coordenadas;
  velocidad: VelocidadPunto;
  latitude: number = 4.791869;
  longitud: number = -75.689368;
  velocidadForm: FormGroup;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 13,
  };

  constructor(private dialogRef: DynamicDialogRef, private data: DynamicDialogConfig, private formBuilder: FormBuilder, private service: RegistroVelocidadService) {
    this.velocidad = data.data.velocidad;
   }

  ngOnInit() {
    this.validateForm();
  }

  public validateForm(): void {
    this.velocidadForm = this.formBuilder.group({
      'latitud': [this.velocidad.latitud, [
        Validators.required
      ]],
      'longitud': [this.velocidad.longitud, [
        Validators.required
      ]],
      'velocidadPrimaria': [this.velocidad.velocidadPrimaria, [
        Validators.required
      ]],
      'velocidadSecundaria': [this.velocidad.velocidadSecundaria, [
        Validators.required
      ]],
      'velocidadTerciaria': [this.velocidad.velocidadTerciaria, [
        Validators.required
      ]],
      'velocidadCuarta': [this.velocidad.velocidadCuarta, [
        Validators.required
      ]]
    });
  }

  public onMapReady(map): void {
    this.map = map;
    this.map.setView(new L.LatLng(this.latitude, this.longitud));
    if (this.velocidad.latitud != null) {
      this.coordClic = L.marker(new L.LatLng(this.velocidad.latitud, this.velocidad.longitud), {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      this.coordClic.addTo(this.map);
    }
  }

  public setCurrentPosition(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitud = position.coords.longitude;
      });
    }
  }

  public placeMarker($event): void {
    if (this.coordClic != null) {
      this.map.removeLayer(this.coordClic);
    }
    this.coordenadas = $event.latlng;
    this.velocidad.latitud = this.coordenadas.lat;
    this.velocidad.longitud = this.coordenadas.lng;
    this.coordClic = L.marker($event.latlng, {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
    this.coordClic.addTo(this.map);
  }

  public cancelSave(): void {
    this.dialogRef.close();
  }

  public saveVelocidad(): void {
    this.service.saveVelocidad(this.velocidad).subscribe( res => {
      Swal.fire('Registro de velocidades', 'Se ha realizado el registro exitosamnte', 'success');
      this.dialogRef.close(res);
    }, err => {
      Swal.fire('Registro de velocidades', 'No se ha podido realizar la acción', 'error');
      console.log(err);
    });
  }
}