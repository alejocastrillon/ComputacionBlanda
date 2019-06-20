import { RegistroVelocidadService } from './registro-velocidad.service';
import { VelocidadPunto } from './../model/VelocidadPunto.model';
import { DialogRegistroComponent } from './dialog-registro/dialog-registro.component';
import { DialogService } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-velocidad',
  templateUrl: './registro-velocidad.component.html',
  styleUrls: ['./registro-velocidad.component.css']
})
export class RegistroVelocidadComponent implements OnInit {

  velocidades: Array<VelocidadPunto> = [];

  constructor(private dialog: DialogService, private service: RegistroVelocidadService) { }

  ngOnInit() {
    this.getVelocidades();
  }

  public getVelocidades(): void {
    this.service.getVelocidades().subscribe( res => {
      this.velocidades = res;
    }, err => {
      console.log(err);
      this.velocidades = [];
    });
  }

  public show(): void {
    let dialog = this.dialog.open(DialogRegistroComponent, {
      width: '70%',
      height: 'auto',
      header: 'Registro de velocidad en punto',
      data: {
        velocidad: new VelocidadPunto()
      }
    });

    dialog.onClose.subscribe( res => {
      if (res != undefined && res != null) {
        this.getVelocidades();
      }
    });
  }

  public selectVelocidad(velocidad: VelocidadPunto): void {
    let vel: VelocidadPunto = new VelocidadPunto();
    vel.idvelocidad = velocidad.idvelocidad;
    vel.nombrePunto = velocidad.nombrePunto;
    vel.latitud = velocidad.latitud;
    vel.longitud = velocidad.longitud;
    vel.velocidadPrimaria = velocidad.velocidadPrimaria;
    vel.velocidadSecundaria = velocidad.velocidadSecundaria;
    vel.velocidadTerciaria = velocidad.velocidadTerciaria;
    vel.velocidadCuarta = velocidad.velocidadCuarta;
    let dialog = this.dialog.open(DialogRegistroComponent, {
      width: '70%',
      height: 'auto',
      header: 'Registro de velocidad en punto',
      data: {
        velocidad: vel
      }
    });

    dialog.onClose.subscribe( res => {
      if (res != undefined && res != null) {
        this.getVelocidades();
      }
    });
  }

}
