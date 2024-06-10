import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';
import { ChangeUpdateService } from '../../../shared/change/services/change-update.service';
import { Change, ChangeType } from '@dontcode/core';
import { FormControl } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'ide-ui-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElementComponent implements OnInit, OnDestroy {
  @Input()
  element!: EditorElement;

  subscriptions = new Subscription ();
  
  control = new FormControl<string>('', {updateOn:'blur'});

  constructor(protected changeService:ChangeUpdateService) { }

  ngOnInit(): void {
    this.updateView ();
    this.subscriptions.add (
      this.control.valueChanges.subscribe ({next: (value) => this.onChange(value)})
    );
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

  updateView (): void {
    if (this.element?.getEditedValue()==null)
      {
        this.control.setValue('', {emitModelToViewChange:true, emitEvent:false});
      } else {
        this.control.setValue(this.element.getEditedValue(), {emitModelToViewChange:true, emitEvent:false});
      }
    
    if ((this.element!=null) && (this.element.isReadonly()==true))
        this.control.disable({emitEvent:false});
      else
        this.control.enable({emitEvent:false});
    }

  onChange(newValue: string|null): void {
    if (this.element!=null) {
    this.element.setEditedValue(newValue);
    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        newValue));

      }
    }

}
