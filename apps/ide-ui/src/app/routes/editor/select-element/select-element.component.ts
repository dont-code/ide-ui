import { Component, Input, OnInit } from '@angular/core';
import { LocaleService } from '../../../shared/text/services/locale.service';

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

  @Input()
  position: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }
}
