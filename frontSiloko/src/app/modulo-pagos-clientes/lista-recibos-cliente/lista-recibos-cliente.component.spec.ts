import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecibosClienteComponent } from './lista-recibos-cliente.component';

describe('ListaRecibosClienteComponent', () => {
  let component: ListaRecibosClienteComponent;
  let fixture: ComponentFixture<ListaRecibosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecibosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecibosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
