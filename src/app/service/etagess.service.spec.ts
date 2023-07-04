import { TestBed } from '@angular/core/testing';

import { EtagessService } from './etagess.service';

describe('EtagessService', () => {
  let service: EtagessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
