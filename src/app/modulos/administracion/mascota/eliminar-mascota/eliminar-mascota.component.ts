import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';


@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {
  id:string='';

  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'estado': ['',[Validators.required]],
    'especie': ['',[Validators.required]],
    'comentario': ['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["especie"].setValue(datos.especie);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    });
  }

  EliminarMascota(){
    
    this.servicioMascota.EliminarMascota(this.id).subscribe((datos: any)=>{
      alert ("¿Esta seguro que desea eliminar la mascota?");
      alert ("Mascota Eliminada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    },(error: any)=>{
      alert ("Error al Eliminar la mascota");
    })
  }

}
