import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';
import { MatSelectChange } from '@angular/material/select';
import { ChangeUpdateService } from '../../../shared/change/services/change-update.service';
import { Change, ChangeType } from '@dontcode/core';

@Component({
  selector: 'ide-ui-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.css']
})
export class SelectElementComponent implements OnInit {

  @Input()
  element: EditorElement;

  constructor(protected changeService:ChangeUpdateService) {
  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }

  onChange(change:MatSelectChange) {
    this.element.setEditedValue(change.value);
    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        change.value));
  }
}
