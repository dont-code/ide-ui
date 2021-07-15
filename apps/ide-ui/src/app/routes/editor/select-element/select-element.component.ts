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
  element!: EditorElement;

  @Output()
  refresh = new EventEmitter<string>();

  filteredElements:any[]=new Array();

  constructor(protected changeService:ChangeUpdateService) {
  }

  ngOnInit(): void {
  }

  calculateOptionValue(option: string): string {
    return option;
  }

  editedValue() {
    if (this.element.getEditedValue())
      return this.element.getEditedValue();
    else
      return '';
  }

  onChange(change:any) {
    //console.log('Selection change', change);
    let value = change;
    if( typeof change !== 'string') {
      value = change.target.value;
    }
    const changed:boolean = this.element.setEditedValue(value);

    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        value));

    if(changed) {
      this.refresh.emit('refresh');
    }
  }

  filterGroupedElements(event:any) {
    const filteredGroups = [];
    const defaultGroup:{label:string, items:Array<any>|null} = {
      label: 'Standard',
      items: null
    }

      // If there is only one selection left, then selects it
    let selectItem:DontCodeSchemaEnumValue|null = null;
    let selectedCount = 0;

    event.query = event.query?.toLowerCase();

    for (const optgroup of this.element.values as Array<DontCodeSchemaEnumValue>) {
      if( !(optgroup.getChildren()) || (optgroup.getChildren().length===0)) {
        if( optgroup.getLabel().toLowerCase().indexOf(event.query) >= 0) {
          if (defaultGroup.items === null) {
            defaultGroup.items = new Array();
            filteredGroups.push(defaultGroup);
          }
          defaultGroup.items.push (optgroup.getLabel());
          if((event.query?.length === optgroup.getLabel().length)) {
            selectedCount++;
            selectItem = optgroup;
            }
        }
      } else {
        const items = optgroup.getChildren().filter (value => value.getLabel().toLowerCase().indexOf(event.query) >=0);
        if( items.length>0) {
          selectedCount += items.length;
          selectItem = items[0];
          filteredGroups.push({
            label: optgroup.getLabel(),
            value: optgroup.getValue(),
            items: items.map(value => value.getLabel())
          });
        }
      }
    }

    this.filteredElements = filteredGroups;
    if ((selectedCount===1)&&(selectItem)) {
      if (selectItem.getLabel().length===event.query?.length) {
        this.onChange({target: {value:selectItem.getLabel()}});
      }
    }
  }
}
