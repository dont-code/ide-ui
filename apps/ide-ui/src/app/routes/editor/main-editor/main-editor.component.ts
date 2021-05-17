import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ChangeListenService } from "../../../shared/change/services/change-listen.service";
import { TextService } from "../../../shared/text/services/text.service";
import { EditorElement } from "../editor-element";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ChangeType, DontCodeModel } from "@dontcode/core";

@Component({
  selector: 'ide-ui-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainEditorComponent implements OnInit, OnDestroy {

  rootElement :EditorElement;

  unsubscriber = new Subject();

  constructor(protected ref:ChangeDetectorRef, protected changeListener: ChangeListenService, public textService:TextService) {
    // Make sure the dev change listener is already started and listening

  }

  ngOnInit(): void {
    this.changeListener.getChangeEvents().pipe( takeUntil(this.unsubscriber))
      .subscribe(change => {
        if (change.type===ChangeType.RESET) {
          if( change.position===DontCodeModel.ROOT || change.position==="/") {
            this.rootElement = this.textService.getRootElement();
            this.rootElement.setEditedValue(change.value?.creation);
//            console.log('Reset received');
            this.ref.markForCheck();
            this.ref.detectChanges();
          }
        }
      });
    this.rootElement = this.textService.getRootElement();
  }

  ngOnDestroy(): void {
    // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
