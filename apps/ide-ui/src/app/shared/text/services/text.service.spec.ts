import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeUpdateService } from '../../change/services/change-update.service';
import {DontCode} from '@dontcode/core/';

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    const fakeUpdateService:ChangeUpdateService= jest.genMockFromModule('../../change/services/change-update.service');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ {
        provide:ChangeUpdateService, useValue:fakeUpdateService
      }]
    });
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can read model', (done) => {
    service.readSchema(DontCode.dtcde.getSchemaManager().getSchema());
    const list:string[] = [];
    const expectedIds=[
      'creation(text)',
      'creation/type(text)',
      'creation/name(input)',
      'creation/entities(object)',
      'creation/entities/name(input)',
      'creation/entities/fields(object)',
      'creation/entities/fields/name(input)',
      'creation/entities/fields/type(array)',
      'creation/entities/fields(object)',
      'creation/entities(object)',
      'creation/screens(object)',
      'creation/screens/name(input)',
      'creation/screens/layout(array)',
      'creation/screens/components(object)',
      'creation/screens/components/type(array)',
      'creation/screens/components/entity/name(input)',
      'creation/screens/components/entity/fields(object)',
      'creation/screens/components/entity/fields/name(input)',
      'creation/screens/components/entity/fields/type(array)',
      'creation/screens/components/entity/fields(object)',
      'creation/screens/components(object)',
      'creation/screens(object)'
    ];

    service.event.subscribe(value => {
//      console.log(value.id+'('+value.type+')');
      list.push(value.id+'('+value.type+')');
      expect(list[list.length-1]).toBe(expectedIds[list.length-1]);
    }, null, ()=> {
      try {
        expect(list).toEqual(expectedIds);
        done();
      } catch (error) {
        done(error);
      }

    });
    service.event.complete();
  });
});
