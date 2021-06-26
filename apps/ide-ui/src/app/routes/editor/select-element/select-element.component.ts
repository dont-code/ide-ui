import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {EditorElement} from '../editor-element';
import {ChangeUpdateService} from '../../../shared/change/services/change-update.service';
import {Change, ChangeType, DontCodeSchemaEnumValue} from '@dontcode/core';

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

  filteredElements:any[];

  constructor(protected changeService:ChangeUpdateService) {
  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }

  onChange(change:any) {
    console.log('Selection change', change);
    const changed:boolean = this.element.setEditedValue(change.value);

    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        change.value));

    if(changed) {
      this.refresh.emit('refresh');
    }
  }

  filterGroupedElements(event) {
    const filteredGroups = [];
    const defaultGroup = {
      label: 'Standard',
      items: null
    }

    event.query = event.query?.toLowerCase();

    for (const optgroup of this.element.values as Array<DontCodeSchemaEnumValue>) {
      if( !(optgroup.getChildren()) || (optgroup.getChildren().length===0)) {
        if( optgroup.getLabel().toLowerCase().indexOf(event.query) >= 0) {
          if (defaultGroup.items === null) {
            defaultGroup.items = new Array();
            filteredGroups.push(defaultGroup);
          }
          defaultGroup.items.push (optgroup.getLabel());
        }
      } else {
        const items = optgroup.getChildren().filter (value => value.getLabel().toLowerCase().indexOf(event.query) >=0).map(value => value.getLabel());
        if( items.length>0) {
          filteredGroups.push({
            label: optgroup.getLabel(),
            value: optgroup.getValue(),
            items: items
          });
        }
      }
    }

    this.filteredElements = filteredGroups;
  }
}
