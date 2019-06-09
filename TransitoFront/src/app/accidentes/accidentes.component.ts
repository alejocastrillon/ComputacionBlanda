import { Accidente } from './../model/Accidente.model';
import { RegistrarAccidenteComponent } from './registrar-accidente/registrar-accidente.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { AccidentesService } from './accidentes.service';

@Component({
  selector: 'app-accidentes',
  templateUrl: './accidentes.component.html',
  styleUrls: ['./accidentes.component.css']
})
export class AccidentesComponent implements OnInit {

  accidentes: Array<Accidente> = [];

  constructor(public dialog: DialogService, private service: AccidentesService) { }

  ngOnInit() {
    this.getAccidentes();
  }

  public show(): void {
    let ref = this.dialog.open(RegistrarAccidenteComponent, {
      header: 'Registrar accidente',
      width: '70%',
      height: 'auto',
      data: {
        accidente: new Accidente()
      }
    });

    ref.onClose.subscribe( res => {
      if (res != undefined && res != null) {
        this.getAccidentes();
      }
    });
  }

  public getAccidentes(): void {
    this.service.getAccidentes().subscribe( res => {
      let accidentes: Array<Accidente> = [];
      for (const r of res) {
        let accidente: Accidente = new Accidente().fromJSON(r);
        accidentes.push(accidente);
      }
      this.accidentes = accidentes;
      console.log(this.accidentes);
    }, err => {
      console.log(err);
      this.accidentes = [];
    });
  }

  public selectAccidente(accidente: Accidente): void {
    let ac: Accidente = new Accidente();
    ac.idaccidente = accidente.idaccidente;
    ac.latitud = accidente.latitud;
    ac.longitud = accidente.longitud;
    ac.nivelLluvia = accidente.nivelLluvia;
    ac.estadoCarretera = accidente.estadoCarretera;
    ac.fechaHora = accidente.fechaHora;
    let ref = this.dialog.open(RegistrarAccidenteComponent, {
      header: 'Registrar accidente',
      width: '70%',
      height: 'auto',
      data: {
        accidente: ac
      }
    });
  }

}
