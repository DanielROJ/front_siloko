import { TestBed } from '@angular/core/testing';

import { CupoCreditoService } from './cupo-credito.service';

describe('CupoCreditoService', () => {
  let service: CupoCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupoCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
