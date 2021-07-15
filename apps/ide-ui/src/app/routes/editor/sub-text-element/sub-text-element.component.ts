import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { EditorElement } from "../editor-element";
import { ChangeUpdateService } from "../../../shared/change/services/change-update.service";
import { Change, ChangeType } from "@dontcode/core";

@Component({
  selector: 'ide-ui-sub-text-element',
  templateUrl: './sub-text-element.component.html',
  styleUrls: ['./sub-text-element.component.css']
})
export class SubTextElementComponent implements OnInit, OnChanges {
  @Input()
  element!: EditorElement;

  items: EditorElement[]=new Array();
  constructor(protected changeService:ChangeUpdateService) { }

  ngOnInit(): void {
  }

  addElement() {
    this.element.addSubElement();
  }

  removeElement(item:EditorElement, index:number) {
    const removed = this.element.removeElement( item, index);
    this.changeService.pushChange(
      new Change(ChangeType.DELETE,
        removed.position, null));
  }

  /**
   * Moves the item up one place and returns the immediately following item, if there is one.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement(item:EditorElement, index:number) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.upElement( item, index);
    if( nextElement !== null) {
      const nextKey= nextElement.getItemIdIfExists();

      this.changeService.pushChange(
        new Change(ChangeType.MOVE, item.position, item.getEditedValue(),undefined, nextKey?nextKey as string:undefined, oldPos)
      );
    }
  }
  downElement(item:EditorElement, index:number) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.downElement( item, index);
    if( nextElement!==null) {
      let nextKey;
      if( nextElement===undefined) {  // It is the last element
        nextKey = undefined;
      } else {
        nextKey=nextElement.getItemIdIfExists();
      }
      this.changeService.pushChange(
          new Change(ChangeType.MOVE, item.position, item.getEditedValue(),undefined, nextKey?nextKey as string:undefined, oldPos)
        );

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = this.element.getChildrenToDisplay();
  }
}
