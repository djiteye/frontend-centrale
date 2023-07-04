import { TestBed } from '@angular/core/testing';

import { EtagetService } from './etaget.service';

describe('EtagetService', () => {
  let service: EtagetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
