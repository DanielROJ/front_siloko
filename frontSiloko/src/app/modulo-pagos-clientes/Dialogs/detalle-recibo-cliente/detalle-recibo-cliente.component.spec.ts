import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReciboClienteComponent } from './detalle-recibo-cliente.component';

describe('DetalleReciboClienteComponent', () => {
  let component: DetalleReciboClienteComponent;
  let fixture: ComponentFixture<DetalleReciboClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleReciboClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleReciboClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
