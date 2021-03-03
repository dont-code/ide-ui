import { TestBed } from "@angular/core/testing";
import { EditorElement, EditorElementType } from "./editor-element";
import {
  AbstractSchemaItem,
  DontCodeModel,
  DontCodeSchemaItem,
  DontCodeSchemaObject,
  DontCodeSchemaRoot, dtcde
} from "@dontcode/core";
import { checkElementTree } from "../../shared/text/services/text.service.spec";

describe('ChangeUpdateService', () => {

  let rootSchema:DontCodeSchemaItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    if (!rootSchema)
      rootSchema= AbstractSchemaItem.goto(dtcde.getSchemaManager().getSchema(), DontCodeModel.ROOT);
  });

  it('should read the core model', () => {
    const rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
    expect(rootElement).toBeTruthy();
  });

  it ('should dynamically support list updates replacing values', () => {
    const rootSubSchema = new DontCodeSchemaRoot (subObjectSchema);

    const creationSchema = AbstractSchemaItem.goto(rootSubSchema,DontCodeModel.ROOT) as DontCodeSchemaObject;
    creationSchema.upsertWith({
      "location": {
        "parent": "/creation",
        "id": "type",
        "after": "before"
      },
      "add": {
        "enum": [
          "list"
        ]
      },
      "props": {
        "added": {
          "type": "string"
        }
      },
      "replace": true
    });

    const rootElement = EditorElement.createNew(
      DontCodeModel.ROOT, DontCodeModel.ROOT,
      EditorElementType.label, creationSchema);

    let expectedIds=[
      'creation(label)',
      'creation/before(input)',
      'creation/type(list)',
      'creation/firstAfter(input)',
      'creation/secondAfter(input)'
    ];

    checkElementTree (rootElement, expectedIds);

    const typeElement:EditorElement = rootElement.getChildrenToDisplay().filter(value => {
      return value.type===EditorElementType.list;
    })[0];

    typeElement.setEditedValue('list'); // Should trigger changes of list elements

    expectedIds=[
      'creation(label)',
      'creation/before(input)',
      'creation/type(list)',
      'creation/added(input)'
    ];

    checkElementTree (rootElement, expectedIds);

    typeElement.setEditedValue('edit'); // Should trigger changes of list elements

    expectedIds=[
      'creation(label)',
      'creation/before(input)',
      'creation/type(list)',
      'creation/firstAfter(input)',
      'creation/secondAfter(input)'
    ];

    checkElementTree (rootElement, expectedIds);

  });
});

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
        "before": {
          "type": "string"
        },
        "type": {
          "enum": [
            "edit",
            "view"
          ]
        },
        "firstAfter": {
          "type": "number"
        },
        "secondAfter": {
          "type": "string"
        },
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
        }
      },
      "additionalProperties": false
    }
  }
};

