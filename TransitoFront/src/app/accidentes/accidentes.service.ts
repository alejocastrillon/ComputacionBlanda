import { Accidente } from './../model/Accidente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccidentesService {

  constructor(private http: HttpClient) { }

  public saveAccidente(accidente: Accidente): Observable<Accidente> {
    return this.http.post<Accidente>('/api/v.1/accidentes/', accidente);
  }

  public getAccidentes(): Observable<Accidente[]> {
    return this.http.get<Accidente[]>('/api/v.1/accidentes/');
  }
}
