import { DialogFormularioSugerenciaComponent } from './dialog-formulario-sugerencia/dialog-formulario-sugerencia.component';
import { Component, OnInit } from '@angular/core';;
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { DialogService } from 'primeng/api';
import { AccidentesService } from '../accidentes/accidentes.service';
import { SugerenciaService } from '../sugerencia.service';

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
  clusterData: L.Marker[] = [];
  longitud: number = -75.689368;
  markerClusterOptions = {
    zoomToBoundsOnClick: false
  };
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 13,
  };

  constructor(private dialog: DialogService, private accidenteService: AccidentesService) { }

  ngOnInit() {
    this.setCurrentPosition();
    this.getAccidentes();
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

  public getAccidentes(): void {
    this.accidenteService.getAccidentes().subscribe( res => {
      console.log(res);
      for (const r of res) {
        let m: L.Marker;
        m = L.marker([r.latitud, r.longitud], {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        });
        this.clusterData.push(m);
      }
      console.log(this.clusterData);
    })
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
      width: '50%',
      header: 'Sugerencia de velocidad',
      data: {
        latitud: this.coordenadas.lat,
        longitud: this.coordenadas.lng
      }
    });
  }

}
