import { TestBed } from '@angular/core/testing';

import { EtageppService } from './etagepp.service';

describe('EtageppService', () => {
  let service: EtageppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtageppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
