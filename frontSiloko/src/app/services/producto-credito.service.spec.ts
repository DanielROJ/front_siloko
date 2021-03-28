import { TestBed } from '@angular/core/testing';

import { ProductoCreditoService } from './producto-credito.service';

describe('ProductoCreditoService', () => {
  let service: ProductoCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
