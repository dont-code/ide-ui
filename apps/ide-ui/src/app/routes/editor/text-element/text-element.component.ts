import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ide-ui-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent implements OnInit {
  @Input()
  elementId: string;

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
