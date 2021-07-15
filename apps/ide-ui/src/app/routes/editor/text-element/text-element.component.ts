import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent implements OnInit {
  @Input()
  element!: EditorElement;

  constructor() { }

  ngOnInit(): void {
  }

}
