import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { 3
  }

  identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url} localhost:3000/identificarUsuario`, {
     usuario: usuario,
     clave: clave 
    },{
      headers: new HttpHeaders({

      })
    })
  }
}
