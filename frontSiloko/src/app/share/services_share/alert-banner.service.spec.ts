import { TestBed } from '@angular/core/testing';

import { AlertBannerService } from './alert-banner.service';

describe('AlertBannerService', () => {
  let service: AlertBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
