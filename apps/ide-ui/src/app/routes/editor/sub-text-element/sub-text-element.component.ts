import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-sub-text-element',
  templateUrl: './sub-text-element.component.html',
  styleUrls: ['./sub-text-element.component.css']
})
export class SubTextElementComponent implements OnInit {
  @Input()
  element: EditorElement;

  constructor() { }

  ngOnInit(): void {
  }

  addElement() {

  }
}
