import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProductosServicios } from 'src/app/modelos/productos-servicios.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto-servicio',
  templateUrl: './editar-producto-servicio.component.html',
  styleUrls: ['./editar-producto-servicio.component.css']
})
export class EditarProductoServicioComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto(); 
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProductosServicios) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    })
  }

  EditarProductoServicio(){
    let tipo = this.fgValidador.controls["tipo"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let p = new ModeloProductosServicios();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProductosServicios) => {
      alert ("Producto o Servicio actualizado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert ("Error actualizando el producto o servicio");
    })
  }
}



