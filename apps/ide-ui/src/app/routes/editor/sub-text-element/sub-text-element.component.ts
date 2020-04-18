import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ide-ui-sub-text-element',
  templateUrl: './sub-text-element.component.html',
  styleUrls: ['./sub-text-element.component.css']
})
export class SubTextElementComponent implements OnInit {
  @Input()
  elementId: string;

  @Input()
  text: string;

  @Input()
  type: string;

  constructor() { }

  ngOnInit(): void {
  }

  addElement() {

  }
}
