import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { AsignarPlanComponent } from './plan/asignar-plan/asignar-plan.component';
import { AsignarProductoServicioComponent } from './producto-servicio/asignar-producto-servicio/asignar-producto-servicio.component';


@NgModule({
  declarations: [
    AsignarPlanComponent,
    AsignarProductoServicioComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
