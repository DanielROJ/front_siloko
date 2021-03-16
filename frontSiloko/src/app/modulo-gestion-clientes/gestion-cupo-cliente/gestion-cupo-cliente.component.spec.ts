import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCupoClienteComponent } from './gestion-cupo-cliente.component';

describe('GestionCupoClienteComponent', () => {
  let component: GestionCupoClienteComponent;
  let fixture: ComponentFixture<GestionCupoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCupoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCupoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
