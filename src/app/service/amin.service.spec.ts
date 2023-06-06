import { TestBed } from '@angular/core/testing';

import { AminService } from './amin.service';

describe('AminService', () => {
  let service: AminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
