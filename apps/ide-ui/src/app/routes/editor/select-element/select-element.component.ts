import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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

  @Output()
  refresh = new EventEmitter<string>();

  constructor(protected changeService:ChangeUpdateService) {
  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }

  onChange(change:any) {
    const changed:boolean = this.element.setEditedValue(change.value);

    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        change.value));

    if(changed) {
      this.refresh.emit('refresh');
    }
  }
}
