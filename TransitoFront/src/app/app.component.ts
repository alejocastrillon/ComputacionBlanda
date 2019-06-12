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
  display: boolean = false;
  items: MenuItem[] = [{
    label: 'Accidentes',
    icon: 'pi pi-exclamation-triangle',
    url: '#/accidentes'
  },
  {
    label: 'Registro de velocidades',
    url: '#/registro-velocidad',
    icon: 'pi pi-cog'
  },
  {
    label: 'Sugerencia de velocidad',
    url: '#/sugerencia'
  }];


}