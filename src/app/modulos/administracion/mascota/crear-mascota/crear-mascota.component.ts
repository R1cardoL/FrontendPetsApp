import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'estado': ['pendiente',[Validators.required]],
    'especie': ['',[Validators.required]],
    'comentario': ['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new ModeloMascota();
    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
    this.servicioMascota.CrearMascota(p).subscribe((datos: ModeloMascota)=>{
      alert ("Mascota registrada correctamente");
      this.router.navigate(["./administracion/listar-mascotas"]);
    },(error: any)=>{
      alert ("Error registrando la mascota");
    })
  }

}
