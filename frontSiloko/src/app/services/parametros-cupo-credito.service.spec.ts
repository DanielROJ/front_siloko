import { TestBed } from '@angular/core/testing';

import { ParametrosCupoCreditoService } from './parametros-cupo-credito.service';

describe('ParametrosCupoCreditoService', () => {
  let service: ParametrosCupoCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametrosCupoCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
