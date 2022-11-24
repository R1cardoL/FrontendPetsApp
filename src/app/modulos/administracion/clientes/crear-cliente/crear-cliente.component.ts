import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'cedula': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'contrasena': ['',[Validators.required]],
    'rol': ['cliente',[Validators.required]]
  });
  constructor(private fb:FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
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
    this.servicioCliente.CrearCliente(p).subscribe((datos: ModeloCliente)=>{
      alert ("Cliente registrado correctamente");
      this.router.navigate(["./administracion/listar-cliente"]);
    },(error: any)=>{
      alert ("Error registrando el cliente");
    })
  }

}

