import { TestBed } from '@angular/core/testing';

import { ChangeUpdateService } from './change-update.service';

describe('ChangeUpdateService', () => {
  let service: ChangeUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
