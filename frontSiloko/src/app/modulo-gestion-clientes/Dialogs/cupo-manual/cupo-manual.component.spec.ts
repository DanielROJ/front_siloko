import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupoManualComponent } from './cupo-manual.component';

describe('CupoManualComponent', () => {
  let component: CupoManualComponent;
  let fixture: ComponentFixture<CupoManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupoManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
