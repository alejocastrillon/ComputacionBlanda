import { DialogFormularioSugerenciaComponent } from './dialog-formulario-sugerencia/dialog-formulario-sugerencia.component';
import { Component, OnInit } from '@angular/core';
import {tileLayer} from 'leaflet';
import * as L from 'leaflet';
import { DialogService } from 'primeng/api';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  map;
  coordClic;
  coordenadas;
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

  constructor(private dialog: DialogService) { }

  ngOnInit() {
    this.setCurrentPosition();
  }


  public onMapReady(map): void {
    this.map = map;
    this.map.setView(new L.LatLng(this.latitude, this.longitud));
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
    this.coordClic = L.marker($event.latlng, {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
    this.coordClic.addTo(this.map);
    let dialog = this.dialog.open(DialogFormularioSugerenciaComponent, {
      width: '70%',
      data: {
        latitud: this.coordenadas.lat,
        longitud: this.coordenadas.lng
      }
    });
  }
}
