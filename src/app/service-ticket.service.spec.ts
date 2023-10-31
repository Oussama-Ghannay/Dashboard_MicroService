import { TestBed } from '@angular/core/testing';

import { ServiceTicketService } from './service-ticket.service';

describe('ServiceTicketService', () => {
  let service: ServiceTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
