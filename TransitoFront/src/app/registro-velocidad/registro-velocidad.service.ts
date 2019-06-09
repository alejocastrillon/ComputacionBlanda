import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VelocidadPunto } from '../model/VelocidadPunto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroVelocidadService {

  constructor(private http: HttpClient) { }

  public saveVelocidad(velocidad: VelocidadPunto): Observable<VelocidadPunto> {
    return this.http.post<VelocidadPunto>('/api/v.1/velocidades/', velocidad);
  }

  public getVelocidades(): Observable<VelocidadPunto[]> {
    return this.http.get<VelocidadPunto[]>('/api/v.1/velocidades/');
  }
}
