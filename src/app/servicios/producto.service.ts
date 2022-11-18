import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloProductosServicios } from '../modelos/productos-servicios.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url= 'http://localhost:3000';
  token: String = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloProductosServicios[]>{
    return this.http.get<ModeloProductosServicios[]>(`${this.url}/productos-servicios`)
  }
  
  ObtenerRegistroPorId(id: string): Observable<ModeloProductosServicios>{
    return this.http.get<ModeloProductosServicios>(`${this.url}/productos-servicios/${id}`)
  }

  CrearProducto(producto: ModeloProductosServicios): Observable<ModeloProductosServicios>{
    return this.http.post<ModeloProductosServicios>(`${this.url}/productos-servicios`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
  ActualizarProducto(producto: ModeloProductosServicios): Observable<ModeloProductosServicios>{
    return this.http.put<ModeloProductosServicios>(`${this.url}/productos-servicios/${producto.id}`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: String): Observable<any> {
    return this.http.delete(`${this.url}/productos-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
