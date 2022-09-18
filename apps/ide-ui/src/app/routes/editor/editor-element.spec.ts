import {TestBed} from "@angular/core/testing";
import {EditorElement, EditorElementType} from "./editor-element";
import {
  AbstractSchemaItem,
  DontCodeModel, DontCodeSchema,
  DontCodeSchemaItem,
  DontCodeSchemaManager,
  DontCodeSchemaObject, DontCodeSchemaRef,
  DontCodeSchemaRoot,
  dtcde
} from "@dontcode/core";
import {checkElementTree} from "../../shared/text/services/text.service.spec";

describe('ChangeUpdateService', () => {

  let rootSchema:DontCodeSchemaItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    if (!rootSchema) {
      const func= AbstractSchemaItem.goto(dtcde.getSchemaManager().getSchema(), DontCodeModel.ROOT);
      expect(func).toBeTruthy();
      rootSchema = func as DontCodeSchemaItem;
    }
  });

  it('should read the core model', () => {
    const rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
    expect(rootElement).toBeTruthy();
    const entities = rootElement.getChild('entities');
    expect(entities).toBeTruthy();
    expect(entities!.type).toEqual('array');
    expect(entities!.isAsArray()).toBeTruthy();

    const entity = entities!.getChildrenToDisplay()[0];
    expect(entity.type).toEqual('object');
    expect(entity.id).toEqual('creation-entities-a');
    expect(entity.schemaPosition).toEqual('creation/entities');
    expect(entity.isAsArray()).toBeFalsy();

    const subEntity = entity.getChildrenToDisplay()[0];
    expect(subEntity).toBeDefined();
    expect(subEntity.schemaPosition).toEqual('creation/entities/from');
  });

  it('should read array of objects', () => {
    const rootElement = EditorElement.createNew(
      DontCodeModel.ROOT, DontCodeModel.ROOT,
      EditorElementType.label, new DontCodeSchemaManager().convertSchemaToMap(testArrayObject));
    expect(rootElement).toBeTruthy();
    const sources = rootElement.getChild('creation')?.getChild('sources');
    expect(sources).toBeTruthy();
    expect(sources!.type).toEqual('array');
    expect(sources!.isAsArray()).toBeTruthy();

    const source = sources!.getChildrenToDisplay()[0];
    expect(source.id).toEqual('creation-creation-sources-a');
    expect(source.schemaPosition).toEqual('creation/creation/sources');
    expect(source.type).toEqual('object');
    expect(source.isAsArray()).toBeFalsy();

    const subSource = source.getChildrenToDisplay()[0];
    expect(subSource).toBeDefined();
    expect(subSource.schemaPosition).toEqual('creation/creation/sources/name');
  });

  it('should support values updates', () => {
    const rootSubSchema = new DontCodeSchemaRoot (subObjectSchema);
    const rootElement = EditorElement.createNew(
      DontCodeModel.ROOT, DontCodeModel.ROOT,
      EditorElementType.label, rootSubSchema.getChild(DontCodeModel.ROOT
      ) as DontCodeSchemaItem);

    const edited:{[key:string]:any}={
      before:'BeforeValue',
      type:'view',
      firstAfter: 23,
      secondAfter: 'AfterValue'
    };
    rootElement.setEditedValue(edited);
    for (const field in edited) {
      expect(rootElement.getChild(field)?.getEditedValue()).toEqual(edited[field]);
    }

    const edited2:{[key:string]:any}={
      before:null,
      type:'view',
      firstAfter: null,
      secondAfter: "AfterValue2"
    };
    rootElement.setEditedValue(edited2);
    for (const field in edited2) {
      expect(rootElement.getChild(field)?.getEditedValue()).toEqual(edited2[field]);
    }

  });

  it('should support array updates', () => {
    const rootSubSchema = new DontCodeSchemaRoot (subArraySchema);
    const rootElement = EditorElement.createNew(
      DontCodeModel.ROOT, DontCodeModel.ROOT,
      EditorElementType.label, rootSubSchema.getChild(DontCodeModel.ROOT
      ) as DontCodeSchemaItem);

    const edited={
      before: {
        'a': {
          name:'entityA'
        }},
      type:'view',
      after: {
        'aa': {
          name:'screenAA'
        },
        'ab': {
          name:'screenAB'
        }
      }
    };
    rootElement.setEditedValue(edited);
    expect(rootElement.getChildInHierarchy('before/a/name')?.getEditedValue()).toEqual(edited.before.a.name);
    expect(rootElement.getChildInHierarchy('after/aa/name')?.getEditedValue()).toEqual(edited.after.aa.name);
    expect(rootElement.getChildInHierarchy('after/ab/name')?.getEditedValue()).toEqual(edited.after.ab.name);

    const edited2={
      type:'view',
      after: {
        'aa': {
          name:'NewScreenAA'
        },
        'ac': {
          name:'screenAC'
        }
      }
    };
    rootElement.setEditedValue(edited2);
    expect(rootElement.getChildInHierarchy('before/a')).toBeTruthy(); // A new element 'before' must have been created for editing purpose
    expect(rootElement.getChildInHierarchy('before/a/name')?.getEditedValue()).toBeFalsy();
    expect(rootElement.getChildInHierarchy('after/aa/name')?.getEditedValue()).toEqual(edited2.after.aa.name);
    expect(rootElement.getChildInHierarchy('after/ab/name')?.getEditedValue()).toBeFalsy();
    expect(rootElement.getChildInHierarchy('after/ac/name')?.getEditedValue()).toEqual(edited2.after.ac.name);

  });

  it ('should support dynamic model', () => {
    const rootSubSchema = new DontCodeSchemaRoot (subObjectSchema);

    const creationSchema = AbstractSchemaItem.goto(rootSubSchema,DontCodeModel.ROOT) as DontCodeSchemaObject;
    creationSchema.upsertWith({
      "location": {
        "parent": "/creation",
        "id": "type",
        "after": "before"
      },
      "update": {
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
  it ('should load dynamic data', () => {
      // Create a copy of the schema to avoid side effects
    const rootSchema = dtcde.getSchemaManager().convertSchemaToMap(DontCodeSchema.defaultv1);

    let sourcesSchema = rootSchema.getChild('creation')?.getChild('sources');
    if( sourcesSchema==null)
      throw new Error ("No Creation sources model");
    else {
      sourcesSchema=dtcde.getSchemaManager().resolveReference(sourcesSchema as DontCodeSchemaRef);
    }

    sourcesSchema.upsertWith({
      location: {
        parent: '#/$defs/source',
        id: 'type'
      },
      update: {
        enum: [
          'Rest'
        ]
      },
      props: {
        url: {
          type: 'string'
        }
      },
      replace: false
    });

    const rootElement = EditorElement.createNew(
      DontCodeModel.APP_SOURCES, DontCodeModel.APP_SOURCES,
      EditorElementType.array, sourcesSchema,undefined, undefined, true);

    rootElement.setEditedValue({
          a: {
            name:"UnitTestSource",
            type:"Rest",
            url:"https://unit-test.com"
          }
    });
    const expectedIds=[
      'creation/sources(array)',
      'creation/sources/a(object)',
      'creation/sources/a/name(input)',
      'creation/sources/a/type(list)',
      'creation/sources/a/url(input)'
    ];

    checkElementTree (rootElement, expectedIds);

    const aElement = rootElement.getChild('a');
    expect(aElement?.getChild("name")?.getEditedValue()).toEqual("UnitTestSource");
    expect(aElement?.getChild("url")?.getEditedValue()).toEqual("https://unit-test.com");
  });


  });

const subArraySchema= {
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
          "type": "array",
          "items": {
            "$ref": "#/$defs/entity"
          }
        },
        "type": {
          "enum": [
            "edit",
            "view"
          ]
        },
        "after": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/screen"
          }
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
    },
    "screen": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }

  }
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
  }
};

const testArrayObject = {
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
        "sources": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              }
            }
          }
        }
      },
      "additionalProperties": false
    }
  }
};
