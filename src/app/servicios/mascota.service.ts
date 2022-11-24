import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio:SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

ObtenerRegistros():Observable<ModeloMascota[]>{
  return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`);
}
ObtenerRegistroPorId(id: string): Observable<ModeloMascota>{
  return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`)
}

CrearMascota(mascota:ModeloMascota):Observable<ModeloMascota>{
  return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota ,{
    headers: new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
ActualizarMascota(mascota:ModeloMascota):Observable<ModeloMascota>{
  return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.id}`,mascota,{
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
EliminarMascota(id:string):Observable<any>{
  return this.http.delete(`${this.url}/mascotas/${id}`,{
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
}