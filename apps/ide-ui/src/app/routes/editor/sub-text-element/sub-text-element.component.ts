import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';
import { TextService } from '../../../shared/text/services/text.service';

@Component({
  selector: 'ide-ui-sub-text-element',
  templateUrl: './sub-text-element.component.html',
  styleUrls: ['./sub-text-element.component.css']
})
export class SubTextElementComponent implements OnInit {
  @Input()
  element: EditorElement;

  items: EditorElement[];
  constructor(protected service:TextService) { }

  ngOnInit(): void {
    this.items = this.service.getList(this.element.position);
  }

  addElement() {
    this.service.addSubElement(this.element);
  }
  removeElement(item:EditorElement, index:number) {
    this.service.removeElement(this.element, item, index);
  }

  upElement(item:EditorElement, index:number) {
    this.service.upElement(this.element, item, index);
  }
  downElement(item:EditorElement, index:number) {
    this.service.downElement(this.element, item, index);
  }
}
