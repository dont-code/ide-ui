import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Change } from '../../../shared/change/change';
import { ChangeListenService } from '../../../shared/change/services/change-listen.service';

@Component({
  selector: 'ide-ui-list-changes',
  templateUrl: './list-changes.component.html',
  styleUrls: ['./list-changes.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListChangesComponent implements OnInit {

  @Input()
  title: string='List of Changes';

  @Input()
  listOfChanges:Change[];

  constructor(protected changeService:ChangeListenService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.listOfChanges=this.changeService.getListOfChanges();
    this.changeService.getChangeEvents ().subscribe(value => {
        //We have to force refresh when displayed in another tab
      this.ref.detectChanges();
    });
  }

}
