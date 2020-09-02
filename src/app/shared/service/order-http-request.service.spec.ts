import { TestBed } from '@angular/core/testing';

import { OrderHttpRequestService } from './order-http-request.service';

describe('OrderHttpRequestService', () => {
  let service: OrderHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
