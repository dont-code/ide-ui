import { TestBed } from '@angular/core/testing';

import { ChangeListenService } from './change-listen.service';
import {PluginCommonModule} from "@dontcode/plugin-common";

describe('ChangeListenService', () => {
  let service: ChangeListenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PluginCommonModule.forRoot()]
    });
    service = TestBed.inject(ChangeListenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
