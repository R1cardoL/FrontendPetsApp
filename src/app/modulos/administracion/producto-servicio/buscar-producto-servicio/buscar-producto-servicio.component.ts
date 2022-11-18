import { Component, OnInit } from '@angular/core';
import { ModeloProductosServicios } from 'src/app/modelos/productos-servicios.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto-servicio',
  templateUrl: './buscar-producto-servicio.component.html',
  styleUrls: ['./buscar-producto-servicio.component.css']
})
export class BuscarProductoServicioComponent implements OnInit {

  listadoRegistros: ModeloProductosServicios[] = []

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos: ModeloProductosServicios[]) =>{
      this.listadoRegistros = datos;
    })
  }
}
