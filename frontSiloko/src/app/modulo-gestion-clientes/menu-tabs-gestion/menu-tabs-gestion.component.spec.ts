import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabsGestionComponent } from './menu-tabs-gestion.component';

describe('MenuTabsGestionComponent', () => {
  let component: MenuTabsGestionComponent;
  let fixture: ComponentFixture<MenuTabsGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabsGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabsGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
