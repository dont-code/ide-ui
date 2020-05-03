import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeUpdateService } from '../../change/services/change-update.service';

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
    service.readSchema({
        "$id": "http://dont-code.net/dont-code-schema",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "description": "JSON Schema for dont-code",
        "type": "object",
        "required": [
          "creation"
        ],
        "properties": {
          "creation": {
            "type": "object",
            "properties": {
              "type": {
                "enum": [
                  "application"
                ]
              },
              "name": {
                "type": "string"
              },
              "entities": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/entity"
                }
              },
              "screens": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/screen"
                }
              }
            },
            "additionalProperties": false
          }
        },
        "definitions": {
          "entity": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "fields": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/field"
                }
              }
            },
            "additionalProperties": false
          },
          "field": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "type": {
                "enum": [
                  "string",
                  "number",
                  "boolean"
                ]
              }
            },
            "additionalProperties": false
          },
          "screen": {
            "type": "object",
            "properties": {
              "name": {
                "type":"string"
              },
              "layout": {
                "enum": [
                  "flow",
                  "grid"
                ]
              },
              "components": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/component"
                }
              }
            },
            "additionalProperties": false
          },
          "component": {
            "type": "object",
            "properties": {
              "type": {
                "enum": [
                  "list",
                  "edit",
                  "view"
                ]
              },
              "entity": {
                "$ref": "#/definitions/entity",
                "format": "#/creation/entities"
              }
            },
            "additionalProperties": false
          }
        }
      }
    );
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
      'creation/screens/components(object)',
      'creation/screens(object)'
    ];

    service.event.subscribe(value => {
      //console.log(value.id+'('+value.type+')='+value.textValue);
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
