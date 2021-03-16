import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigVariblesCreditoComponent } from './config-varibles-credito.component';

describe('ConfigVariblesCreditoComponent', () => {
  let component: ConfigVariblesCreditoComponent;
  let fixture: ComponentFixture<ConfigVariblesCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigVariblesCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigVariblesCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
