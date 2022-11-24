import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css']
})
export class EliminarSucursalComponent implements OnInit {

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
  EliminarSucursal(){
    
    this.servicioSucursal.EliminarSucursal(this.id).subscribe((datos: any)=>{
      alert ("¿Esta seguro que desea eliminar el sucursal?");
      alert ("Sucursal eliminada correctamente");
      this.router.navigate(["/administracion/listar-sucursal"]);
    },(error: any)=>{
      alert ("Error al eliminar la sucursal");
    })
  }

}