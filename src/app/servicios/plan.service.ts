import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private SeguridadServicio: SeguridadService) {
    this.token = this.SeguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloPlan[]>{
     return this.http.get<ModeloPlan[]>(`${this.url}/planes`);
  }
  ObtenerRegistrosPorId(id: string): Observable<ModeloPlan>{
    return this.http.get<ModeloPlan>(`${this.url}/planes/${id}`);
 }
  

  CrearPlan(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.http.post<ModeloPlan>(`${this.url}/planes`,plan, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer $ {this.token}`
      })
    })
  }

  ActualizarPlan(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.http.put<ModeloPlan>(`${this.url}/planes/${plan.id}`,plan, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer $ {this.token}`
      })
    })
  }

  EliminarPlan(id: string): Observable<any> {
    return this.http.delete(`${this.url}/planes/${id}`, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer $ {this.token}`
      })
    })
  }
}



  