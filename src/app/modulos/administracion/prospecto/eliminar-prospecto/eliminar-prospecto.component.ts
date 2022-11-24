import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-eliminar-prospecto',
  templateUrl: './eliminar-prospecto.component.html',
  styleUrls: ['./eliminar-prospecto.component.css']
})
export class EliminarProspectoComponent implements OnInit {

  id:string='';

  fgValidador: FormGroup = this.fb.group({
      'id':['',[Validators.required]],
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'correo': ['',[Validators.required]],
      'celular': ['',[Validators.required]],
      'comentario': ['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarProspecto();
  }
  BuscarProspecto(){
    this.servicioProspecto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProspecto) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    });
  }
  EliminarProspecto(){
    
    this.servicioProspecto.EliminarProspecto(this.id).subscribe((datos: any)=>{
      alert ("¿Esta seguro que desea eliminar el prospecto?");
      alert ("prospecto eliminado correctamente");
      this.router.navigate(["/administracion/listar-prospecto"]);
    },(error: any)=>{
      alert ("Error al eliminar el prospecto");
    })
  }

}
