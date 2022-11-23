import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})


export class EliminarPlanComponent implements OnInit {
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

  EliminarPlan(){
        this.servicioplan.EliminarPlan(this.id).subscribe((datos: any) => {
          alert("¿Esta seguro que desea eliminar el plan?");
          alert("Plan eliminado correctamente");
      
      this.router.navigate(["/administracion/listar-plan"]);
    }, (error: any) => {
      alert("Error al eliminar el plan ");
    })
    

    
    
  }
}
