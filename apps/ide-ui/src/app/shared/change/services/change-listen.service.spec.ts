import { TestBed } from '@angular/core/testing';

import { ChangeListenService } from './change-listen.service';

describe('ChangeListenService', () => {
  let service: ChangeListenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeListenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
