import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path: 'listar-productos',
    component: BuscarProductoServicioComponent
  },
  {
    path: 'crear-producto',
    component: CrearProductoServicioComponent
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoServicioComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'editar-mascota',
    component: EditarMascotaComponent
  },
























  {
    path: 'crear-plan',
    component: CrearPlanComponent
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent
  },
  {
    path: 'listar-plan',
    component: BuscarPlanComponent
  },
  {
    path: 'eliminar-plan/:id',
    component: EliminarPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }