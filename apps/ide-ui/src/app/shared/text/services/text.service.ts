import { Injectable } from "@angular/core";
import { Change, ChangeType, DontCodeModel, DontCodeSchemaItem, AbstractSchemaItem } from "@dontcode/core";
import { EditorElement, EditorElementType } from "../../../routes/editor/editor-element";
import { HttpClient } from "@angular/common/http";
import { ChangeUpdateService } from "../../change/services/change-update.service";

/**
  Manages the model to be edited and as well the list of elements that informs the UI about what to display.
 */
@Injectable({
  providedIn: 'root'
})
export class TextService {

  protected jsonSchema:DontCodeSchemaItem|null=null;

  protected rootElement:EditorElement|null=null;

  /**
   * Stores the SchemaItem corresponding to a position in the schema
   * For example:
   *  'creation/entities' => The SchemaItem describing an entity
   *  'creation/entities/fields/' => The SchemaItem describing a field in an entity
   *  'creation/screens[type=list]/columns' => The SchemaItem describing a column of a screen when the screen type is list
   */
  //mapOfJson = new Map<string, DontCodeSchemaItem>();

  constructor(protected http:HttpClient) {
//    console.debug('TextElement: Constructor');

  }


  resetSchema () {
//    console.debug('TextElement: Resetting rootElement');
    this.rootElement=null;
  }

  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema (schemaAsJson:DontCodeSchemaItem) {
    this.jsonSchema = schemaAsJson;
    const rootSchema= AbstractSchemaItem.goto(schemaAsJson, DontCodeModel.ROOT);
    if( rootSchema) {
      this.rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
  //      console.debug('TextElement: New rootElement set');
      }
  }

  getRootElement (): EditorElement {
    if (!this.rootElement) throw new Error('No root elements to return');
  //  console.debug('TextElement: returning rootElement');
    return this.rootElement;
  }
}
