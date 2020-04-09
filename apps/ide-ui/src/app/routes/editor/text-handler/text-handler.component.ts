import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit {

  listOfElements = ['I want to create a ', ['application', 'module'], 'to','edit','policies'];

  constructor() { }

  ngOnInit(): void {
  }

}
