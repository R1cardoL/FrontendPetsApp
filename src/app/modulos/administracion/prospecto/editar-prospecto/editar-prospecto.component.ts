import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-editar-prospecto',
  templateUrl: './editar-prospecto.component.html',
  styleUrls: ['./editar-prospecto.component.css']
})
export class EditarProspectoComponent implements OnInit {

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

  EditarProspecto(){
    
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new ModeloProspecto();
    p.nombre = nombre;
    p.apellido = apellido;
    p.correo = correo;
    p.celular = celular;
    p.comentario = comentario;
    p.id=this.id;
    this.servicioProspecto.ActualizarProspecto(p).subscribe((datos: ModeloProspecto)=>{
      alert ("Prospecto Actualizado correctamente");
      this.router.navigate(["/administracion/listar-prospecto"]);
    },(error: any)=>{
      alert ("Error al actualizar el prospecto");
    })
  }

}
