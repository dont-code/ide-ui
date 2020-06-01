import { TestBed } from "@angular/core/testing";

import { EditorElement, EditorElementType } from "./editor-element";
import { AbstractSchemaItem, DontCodeSchemaItem, DontCodeModel, DontCode } from '@dontcode/core';

describe('ChangeUpdateService', () => {

  let rootSchema:DontCodeSchemaItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    if (!rootSchema)
      rootSchema= AbstractSchemaItem.goto(DontCode.dtcde.getSchemaManager().getSchema(), DontCodeModel.ROOT);
  });

  it('should read the core model', () => {
    let rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
    expect(rootElement).toBeTruthy();
  });
});
