import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {

  listadoRegistros:ModeloCliente[]=[];
  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoClientes();
  }

  ObtenerListadoClientes(){
    this.clienteServicio.ObtenerRegistros().subscribe((datos: ModeloCliente[])=> {
      this.listadoRegistros=datos
    })
  };
}

