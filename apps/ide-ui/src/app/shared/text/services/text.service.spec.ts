import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeUpdateService } from '../../change/services/change-update.service';
import {DontCode} from '@dontcode/core/';
import { EditorElement } from "../../../routes/editor/editor-element";

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
      'creation(label)',
      'creation/type(list)',
      'creation/name(input)',
      'creation/entities(array)',
      'creation/entities/a(object)',
      'creation/entities/a/name(input)',
      'creation/entities/a/fields(array)',
      'creation/entities/a/fields/a(object)',
      'creation/entities/a/fields/a/name(input)',
      'creation/entities/a/fields/a/type(list)',
      'creation/screens(array)',
      'creation/screens/a(object)',
      'creation/screens/a/name(input)',
      'creation/screens/a/layout(list)',
      'creation/screens/a/components(array)',
      'creation/screens/a/components/a(object)',
      'creation/screens/a/components/a/type(list)',
      'creation/screens/a/components/a/entity(object)',
      'creation/screens/a/components/a/entity/name(input)',
      'creation/screens/a/components/a/entity/fields(array)',
      'creation/screens/a/components/a/entity/fields/a(object)',
      'creation/screens/a/components/a/entity/fields/a/name(input)',
      'creation/screens/a/components/a/entity/fields/a/type(list)'
    ];

    recurse (service.getRootElement(), list);
    list.forEach((value, index) => {
      expect(value).toBe(expectedIds[index]);
    });
    done();
  });

});

function recurse(element:EditorElement, list:Array<string>) {
  //console.log(element.position+'('+element.type+')');
  list.push(element.position+'('+element.type+')');
  element.getChildrenToDisplay().forEach(value => {
    recurse(value, list);
  })
}


