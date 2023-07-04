import { TestBed } from '@angular/core/testing';

import { EtagettService } from './etagett.service';

describe('EtagettService', () => {
  let service: EtagettService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagettService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
