import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesCreditoComponent } from './lista-solicitudes-credito.component';

describe('ListaSolicitudesCreditoComponent', () => {
  let component: ListaSolicitudesCreditoComponent;
  let fixture: ComponentFixture<ListaSolicitudesCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
