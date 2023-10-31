import { TestBed } from '@angular/core/testing';

import { ServiceEvenementService } from './service-evenement.service';

describe('ServiceEvenementService', () => {
  let service: ServiceEvenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEvenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
