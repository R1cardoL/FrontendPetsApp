import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './producto-servicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospecto/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospecto/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospecto/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'listar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent
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
    path: 'eliminar-producto/:id',
    component: EliminarProductoServicioComponent
  },
  {
    path: "listar-mascotas",
    component: BuscarMascotaComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent
  },
  {
    path: 'eliminar-mascota/:id',
    component: EliminarMascotaComponent
  },
  {
    path: "listar-plan",
    component: BuscarPlanComponent
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
    path: 'eliminar-plan/:id',
    component: EliminarPlanComponent
  },
  {
    path: "crear-cliente",
    component: CrearClienteComponent
  },
  {
    path: 'crear-plan',
    component: CrearClienteComponent
  },
  {
    path: 'editar-plan/:id',
    component: EditarClienteComponent
  },
  {
    path: 'eliminar-plan/:id',
    component: EliminarClienteComponent
  },
  {
    path: "listar-prospecto",
    component: BuscarProspectoComponent
  },
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  },
  {
    path: 'editar-prospecto/:id',
    component: EditarProspectoComponent
  },
  {
    path: 'eliminar-prospecto/:id',
    component: EliminarProspectoComponent
  },
  {
    path: "listar-sucursal",
    component: BuscarSucursalComponent
  },
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent
  },
  {
    path: 'eliminar-sucursal/:id',
    component: EliminarSucursalComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }