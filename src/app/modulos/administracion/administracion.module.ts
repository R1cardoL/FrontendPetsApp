import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './producto-servicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospecto/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospecto/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarProspectoComponent } from './prospecto/buscar-prospecto/buscar-prospecto.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    BuscarProductoServicioComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent,
    CrearProspectoComponent,
    EditarProspectoComponent,
    EliminarProspectoComponent,
    BuscarProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
