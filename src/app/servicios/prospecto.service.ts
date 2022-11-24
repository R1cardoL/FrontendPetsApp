import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { ModeloProspecto } from '../modelos/prospecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio:SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

ObtenerRegistros():Observable<ModeloProspecto[]>{
  return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`);
}
ObtenerRegistroPorId(id: string): Observable<ModeloProspecto>{
  return this.http.get<ModeloProspecto>(`${this.url}/prospectos/${id}`)
}

CrearProspecto(usuario:ModeloCliente):Observable<ModeloProspecto>{
  return this.http.post<ModeloProspecto>(`${this.url}/prospectos`, usuario ,{
    headers: new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
ActualizarProspecto(prospecto:ModeloProspecto):Observable<ModeloProspecto>{
  return this.http.put<ModeloCliente>(`${this.url}/prospectos/${prospecto.id}`,prospecto,{
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
EliminarProspecto(id:string):Observable<any>{
  return this.http.delete(`${this.url}/prospectos/${id}`,{
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
  })
}
}