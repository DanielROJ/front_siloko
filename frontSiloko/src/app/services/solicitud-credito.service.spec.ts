import { TestBed } from '@angular/core/testing';

import { SolicitudCreditoService } from './solicitud-credito.service';

describe('SolicitudCreditoService', () => {
  let service: SolicitudCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
