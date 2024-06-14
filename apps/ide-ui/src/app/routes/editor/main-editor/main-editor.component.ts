import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ChangeListenService } from "../../../shared/change/services/change-listen.service";
import { TextService } from "../../../shared/text/services/text.service";
import { EditorElement } from "../editor-element";
import {Subject, Subscription} from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ChangeType, DontCodeModel } from "@dontcode/core";

@Component({
  selector: 'ide-ui-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainEditorComponent implements OnInit, OnDestroy {

  rootElement:EditorElement|null=null;

  unsubscriber = new Subscription();

  constructor(protected ref:ChangeDetectorRef, protected changeListener: ChangeListenService, public textService:TextService) {
    // Make sure the dev change listener is already started and listening

  }

  ngOnInit(): void {
    try {
      this.rootElement = this.textService.getRootElement();
      console.debug('Got initial rootElement', this.rootElement.getChild('name')?.getEditedValue());
    } catch (err) {
      console.error('Error getting initial root element.', err);
    }

    this.unsubscriber.add(this.changeListener.getChangeEvents()
      .subscribe(change => {
        console.debug('Change receive for rootElement', this.rootElement?.getChild('name')?.getEditedValue());
        if (change.type===ChangeType.RESET) {
          if( change.position===DontCodeModel.ROOT || change.position==="") {
            try {
            this.rootElement = this.textService.getRootElement();
            this.rootElement.setEditedValue(change.value?.creation);
            console.debug('Reset received, new root element', this.rootElement.getChild('name')?.getEditedValue());
            this.ref.markForCheck();
            this.ref.detectChanges();
          } catch (err) {
            console.error('Error getting the edited root element.', err);
          }
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    console.debug('Closing with rootElement', this.rootElement?.getChild('name')?.getEditedValue());
    // unsubscribe to all observables
    this.unsubscriber.unsubscribe();
  }

}
