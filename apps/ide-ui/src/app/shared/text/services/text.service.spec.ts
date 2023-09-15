import {TestBed} from '@angular/core/testing';

import {TextService} from './text.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EditorElement} from "../../../routes/editor/editor-element";

//jest.mock('../../change/services/change-update.service');
import {ChangeUpdateService} from '../../change/services/change-update.service';
import {DontCodeSchemaRoot, dtcde} from "@dontcode/core";

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    const fakeUpdateService:ChangeUpdateService= jest.genMockFromModule('../../change/services/change-update.service');
    fakeUpdateService.pushChange =  jest.fn(change => {
    });
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

  it ('can read sub-objects', (done) => {
    service.readSchema(new DontCodeSchemaRoot (subObjectSchema));
    const expectedIds=[
      'creation(label)',
      'creation/entity(object)',
      'creation/entity/name(input)'
      ];

    checkElementTree (service.getRootElement(), expectedIds);
    done();
  });

  it('can read model', (done) => {
    service.readSchema(dtcde.getSchemaManager().getSchema());
    const expectedIds=[
      'creation(label)',
      'creation/type(list)',
      'creation/name(input)',
      'creation/entities(array)',
      'creation/entities/a(object)',
      'creation/entities/a/from(input)',
      'creation/entities/a/name(input)',
      'creation/entities/a/fields(array)',
      'creation/entities/a/fields/a(object)',
      'creation/entities/a/fields/a/name(input)',
      'creation/entities/a/fields/a/type(list)',
      'creation/sharing(object)',
      'creation/sharing/with(list)',
      'creation/reports(array)',
      'creation/reports/a(object)',
      'creation/reports/a/title(input)',
      'creation/reports/a/for(input)',
      'creation/reports/a/groupedBy(array)',
      'creation/reports/a/groupedBy/a(object)',
      'creation/reports/a/groupedBy/a/of(input)',
      'creation/reports/a/groupedBy/a/label(input)',
      'creation/reports/a/groupedBy/a/show(list)',
      'creation/reports/a/groupedBy/a/display(array)',
      'creation/reports/a/groupedBy/a/display/a(object)',
      'creation/reports/a/groupedBy/a/display/a/operation(list)',
      'creation/reports/a/groupedBy/a/display/a/of(input)',
      'creation/reports/a/groupedBy/a/display/a/label(input)',
      'creation/reports/a/sortedBy(array)',
      'creation/reports/a/sortedBy/a(object)',
      'creation/reports/a/sortedBy/a/by(input)',
      'creation/reports/a/sortedBy/a/direction(list)',
      'creation/reports/a/as(array)',
      'creation/reports/a/as/a(object)',
      'creation/reports/a/as/a/type(list)',
      'creation/reports/a/as/a/of(input)',
      'creation/reports/a/as/a/by(input)',
      'creation/reports/a/as/a/title(input)',
      'creation/sources(array)',
      'creation/sources/a(object)',
      'creation/sources/a/name(input)',
      'creation/sources/a/type(list)',
      'creation/screens(array)',
      'creation/screens/a(object)',
      'creation/screens/a/name(input)',
      'creation/screens/a/layout(list)',
      'creation/screens/a/components(array)',
      'creation/screens/a/components/a(object)',
      'creation/screens/a/components/a/type(list)',
      'creation/screens/a/components/a/entity(input)'
    ];

    checkElementTree(service.getRootElement(), expectedIds);
    done();
  });

});

export function recurse(element:EditorElement, list:Array<string>) {
  //console.log(element.position+'('+element.type+')');
  list.push(element.position+'('+element.type+')');
  element.getChildrenToDisplay().forEach(value => {
    recurse(value, list);
  })
}

export function checkElementTree (root:EditorElement, expectedIds:string[]) {
  const list:string[] = [];
  recurse (root, list);
  list.forEach((value, index) => {
    expect(value).toBe(expectedIds[index]);
  });

}

 const subObjectSchema={
  "$id": "http://dont-code.net/dont-code-schema/v1",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "JSON Schema v1 for dont-code",
  "type": "object",
  "required": [
    "creation"
  ],
  "properties": {
    "creation": {
      "type": "object",
      "properties": {
        "entity": {
            "$ref": "#/$defs/entity"
        }
      },
      "additionalProperties": false
    }
  },
  "$defs": {
    "entity": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  }
};
