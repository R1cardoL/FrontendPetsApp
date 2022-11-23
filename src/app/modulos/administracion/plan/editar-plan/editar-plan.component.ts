import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {
id:string = '';    
  fgValidador: FormGroup = this.fb.group({
    'id' : ['', [Validators.required]],
    'nombre' : ['', [Validators.required]],
    'descripcion' : ['', [Validators.required]],
    'precio' : ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
     private servicioplan: PlanService,
     private router: Router,
     private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }
  BuscarPlan(){
    this.servicioplan.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    });
  }

  EditarPlan(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value; 
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    this.servicioplan.ActualizarPlan(p).subscribe((datos: ModeloPlan) => {
      alert("Plan actualizado correctamente");
      this.router.navigate(["/administracion/listar-plan"]);
    }, (error: any) => {
      alert("Error al actualizar el plan ");
    })
    

    
    
  }
}
