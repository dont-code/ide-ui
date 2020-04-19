import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElementComponent implements OnInit {
  @Input()
  element: EditorElement;

  constructor() { }

  ngOnInit(): void {
  }

}
