import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SugerenciaResponse } from '../model/SugerenciaResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  constructor(private http: HttpClient) { }

  public generateSugerencia(latitud: number, longitud:number, estadoCarretera: number, estadoClima: number): Observable<SugerenciaResponse> {
    return this.http.get<SugerenciaResponse>('/api/v.1/sugerencias/' + latitud + '/' + longitud + '/' + estadoCarretera + '/' + estadoClima);
  }
}
