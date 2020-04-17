import { TestBed } from '@angular/core/testing';

import { MarginService } from './margin.service';

describe('MarginService', () => {
  let service: MarginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
