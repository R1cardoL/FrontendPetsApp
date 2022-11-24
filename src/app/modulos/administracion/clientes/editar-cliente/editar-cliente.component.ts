import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  
  id:string='';

    fgValidador: FormGroup = this.fb.group({
      'id':['',[Validators.required]],
      'cedula': ['',[Validators.required]],
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'telefono': ['',[Validators.required]],
      'correo': ['',[Validators.required]],
      'contrasena': ['',[Validators.required]],
      'rol': ['',[Validators.required]]
    });
    constructor(private fb:FormBuilder,
      private servicioCliente: ClienteService,
      private router: Router,
      private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id= this.route.snapshot.params["id"];
      this.BuscarCliente();
    }
  
    BuscarCliente(){
      this.servicioCliente.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloCliente) => {
        this.fgValidador.controls["id"].setValue(this.id);
        this.fgValidador.controls["cedula"].setValue(datos.cedula);
        this.fgValidador.controls["nombre"].setValue(datos.nombre);
        this.fgValidador.controls["apellido"].setValue(datos.apellido);
        this.fgValidador.controls["telefono"].setValue(datos.telefono);
        this.fgValidador.controls["correo"].setValue(datos.correo);
        this.fgValidador.controls["contrasena"].setValue(datos.contrasena);
        this.fgValidador.controls["rol"].setValue(datos.rol);
      });
    }
  
    EditarCliente(){
      let cedula = this.fgValidador.controls["cedula"].value;
      let nombre = this.fgValidador.controls["nombre"].value;
      let apellido = this.fgValidador.controls["apellido"].value;
      let telefono = this.fgValidador.controls["telefono"].value;
      let correo = this.fgValidador.controls["correo"].value;
      let contrasena = this.fgValidador.controls["contrasena"].value;
      let rol = this.fgValidador.controls["rol"].value;
      let p = new ModeloCliente();
      p.cedula = cedula;
      p.nombre = nombre;
      p.apellido = apellido;
      p.telefono = telefono;
      p.correo = correo;
      p.contrasena = contrasena;
      p.rol = rol;
      p.id=this.id;
      this.servicioCliente.ActualizarCliente(p).subscribe((datos: ModeloCliente)=>{
        alert ("Cliente Actualizado correctamente");
        this.router.navigate(["/administracion/listar-cliente"]);
      },(error: any)=>{
        alert ("Error al actualizar el cliente");
      })
    }
  
  }