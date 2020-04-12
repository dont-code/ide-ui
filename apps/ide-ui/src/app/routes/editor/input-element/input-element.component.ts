import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ide-ui-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElementComponent implements OnInit {
  @Input()
  elementId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
