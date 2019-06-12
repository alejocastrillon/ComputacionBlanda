import { AccidentesService } from './../accidentes.service';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Accidente } from '../../model/Accidente.model';
import {tileLayer} from 'leaflet';
import * as L from 'leaflet';
import Swal from 'sweetalert2';

interface marker {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-registrar-accidente',
  templateUrl: './registrar-accidente.component.html',
  styleUrls: ['./registrar-accidente.component.css']
})
export class RegistrarAccidenteComponent implements OnInit {

  accidenteForm: FormGroup;
  map;
  coordClic;
  coordenadas;
  accidente: Accidente;
  latitude: number = 4.791869;
  longitud: number = -75.689368;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 13,
  };


  constructor(public dialogRef: DynamicDialogRef, public data: DynamicDialogConfig, private formBuilder: FormBuilder, private service: AccidentesService) {
    this.accidente = data.data.accidente;
   }

  ngOnInit() {
    this.validateForm();
    if (this.accidente.idaccidente == null) {
      this.setCurrentPosition();
    } else {
      this.latitude = this.accidente.latitud;
      this.longitud = this.accidente.longitud;
      this.map.setView(new L.LatLng(this.latitude, this.longitud));
    }
  }

  public validateForm(): void {
    this.accidenteForm = this.formBuilder.group({
      'latitud': [this.accidente.latitud, [
        Validators.required
      ]],
      'longitud': [this.accidente.longitud, [
        Validators.required
      ]],
      'nivelLluvia': [this.accidente.nivelLluvia, [
        Validators.required
      ]],
      'estadoCarretera': [this.accidente.estadoCarretera, [
        Validators.required
      ]]
    });
  }

  public onMapReady(map): void {
    this.map = map;
    this.map.setView(new L.LatLng(this.latitude, this.longitud));
    if (this.accidente.latitud != null) {
      this.coordClic = L.marker(new L.LatLng(this.accidente.latitud, this.accidente.longitud), {
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
        this.map.setView(new L.LatLng(this.latitude, this.longitud));
      });
    }
  }

  public placeMarker($event): void {
    if (this.coordClic != null) {
      this.map.removeLayer(this.coordClic);
    }
    this.coordenadas = $event.latlng;
    this.accidente.latitud = this.coordenadas.lat;
    this.accidente.longitud = this.coordenadas.lng;
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

  public saveAccidente(): void {
    this.service.saveAccidente(this.accidente).subscribe( res => {
      Swal.fire('Registro accidente', 'Se ha registrado el accidente', 'success');
      this.dialogRef.close(this.accidente);
    }, err => {
      console.log(err);
      Swal.fire('Registro accidente', 'No se ha podido realizar la acción', 'error');
    });
  }

  public cancelSave(): void {
    this.dialogRef.close();
  }

}
