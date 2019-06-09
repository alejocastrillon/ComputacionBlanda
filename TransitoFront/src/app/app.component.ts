import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TransitoFront';
  items: MenuItem[] = [{
    label: 'Accidentes',
    icon: 'fa fa-fw fa-check',
    url: 'accidentes',
    items: [
      [
        { label: 'Registrar accidentes' },
        { label: 'Listas de accidentes' }
      ]
    ]
  },
  {
    label: 'Registro de velocidades',
    url: 'registro-velocidad',
    items: [
      [
        { label: 'Undo'},
        { label: 'Redo'}
      ]
    ]
  }];


}