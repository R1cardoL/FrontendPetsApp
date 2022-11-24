import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'departamento': ['',[Validators.required]],
    'ciudad': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
  });
  constructor(private fb:FormBuilder,
    private servicioSucursal: SucursalService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  GuardarSucursal(){
    let departamento = this.fgValidador.controls["departamento"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let p = new ModeloSucursal();
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.direccion = direccion;
    p.telefono = telefono;
    
    this.servicioSucursal.CrearSucursal(p).subscribe((datos: ModeloSucursal)=>{
      alert ("Sucursal registrado correctamente");
      this.router.navigate(["./administracion/listar-sucursal"]);
    },(error: any)=>{
      alert ("Error registrando la sucursal");
    })
  }
  
}