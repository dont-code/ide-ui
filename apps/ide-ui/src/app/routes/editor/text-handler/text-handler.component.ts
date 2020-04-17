import { Component, OnInit } from '@angular/core';
import { TextService } from '../../../shared/text/services/text.service';
import { EditorElement } from '../editor-element';
import { MarginService } from '../margin.service';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit {

  listOfElements:EditorElement[] = [];

  constructor(protected model: TextService, protected margin:MarginService) { }

  ngOnInit(): void {
    this.listOfElements = this.model.listOfElements;
    this.margin.reset();
  }

}
