import { Component, Input, OnInit } from '@angular/core';
import { LocaleService } from '../../../shared/text/services/locale.service';
import { EditorElement } from '../editor-element';

@Component({
  selector: 'ide-ui-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.css']
})
export class SelectElementComponent implements OnInit {

  @Input()
  element: EditorElement;

  constructor() {

  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }
}
