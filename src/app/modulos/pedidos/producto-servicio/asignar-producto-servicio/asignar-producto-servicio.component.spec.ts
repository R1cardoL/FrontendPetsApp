import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProductoServicioComponent } from './asignar-producto-servicio.component';

describe('AsignarProductoServicioComponent', () => {
  let component: AsignarProductoServicioComponent;
  let fixture: ComponentFixture<AsignarProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
