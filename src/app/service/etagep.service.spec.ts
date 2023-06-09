import { TestBed } from '@angular/core/testing';

import { EtagepService } from './etagep.service';

describe('EtagepService', () => {
  let service: EtagepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
