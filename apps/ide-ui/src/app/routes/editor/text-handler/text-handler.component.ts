import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../../../shared/text/services/text.service';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-text-handler',
  templateUrl: './text-handler.component.html',
  styleUrls: ['./text-handler.component.css']
})
export class TextHandlerComponent implements OnInit {

  @Input()
  position:string;

  listOfElements:EditorElement[] = [];

  constructor(protected model: TextService) { }

  ngOnInit(): void {
    this.listOfElements = this.model.getList(this.position);
  }

}
