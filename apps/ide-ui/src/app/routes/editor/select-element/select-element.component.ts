import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ide-ui-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.css']
})
export class SelectElementComponent implements OnInit {

  @Input()
  options: string[]
  @Input()
  elementId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
