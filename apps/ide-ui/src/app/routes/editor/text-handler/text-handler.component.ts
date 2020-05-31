import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { TextService } from '../../../shared/text/services/text.service';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit, OnChanges {

  @Input()
  element:EditorElement;

  listOfElements:EditorElement[] = [];

  constructor(protected model: TextService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
//    console.log("text Changed");
    this.listOfElements = this.element.getChildrenToDisplay();
  }

}
