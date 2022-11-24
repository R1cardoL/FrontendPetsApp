import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  id:string='';

    fgValidador: FormGroup = this.fb.group({
      'id':['',[Validators.required]],
      'departamento': ['',[Validators.required]],
      'ciudad': ['',[Validators.required]],
      'direccion': ['',[Validators.required]],
      'telefono': ['',[Validators.required]],
      
    });
    constructor(private fb:FormBuilder,
      private servicioSucursal: SucursalService,
      private router: Router,
      private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id= this.route.snapshot.params["id"];
      this.BuscarSucursal();
    }
  
    BuscarSucursal(){
      this.servicioSucursal.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloSucursal) => {
        this.fgValidador.controls["id"].setValue(this.id);
        this.fgValidador.controls["departamento"].setValue(datos.departamento);
        this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
        this.fgValidador.controls["direccion"].setValue(datos.direccion);
        this.fgValidador.controls["telefono"].setValue(datos.telefono);
        
      });
    }
  
    EditarSucursal(){
      let departamento = this.fgValidador.controls["departamento"].value;
      let ciudad = this.fgValidador.controls["ciudad"].value;
      let direccion = this.fgValidador.controls["direccion"].value;
      let telefono = this.fgValidador.controls["telefono"].value;
      let p = new ModeloSucursal();
      p.departamento = departamento;
      p.ciudad = ciudad;
      p.direccion = direccion;
      p.telefono = telefono;
      p.id=this.id;
      this.servicioSucursal.ActualizarSucursal(p).subscribe((datos: ModeloSucursal)=>{
        alert ("Sucursal Actualizada correctamente");
        this.router.navigate(["/administracion/listar-sucursal"]);
      },(error: any)=>{
        alert ("Error al actualizar al sucursal");
      })
    }
  
  }