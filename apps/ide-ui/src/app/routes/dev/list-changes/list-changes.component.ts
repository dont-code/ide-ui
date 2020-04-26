import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Change } from '../../../shared/change/change';
import { ChangeListenService } from '../../../shared/change/services/change-listen.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ide-ui-list-changes',
  templateUrl: './list-changes.component.html',
  styleUrls: ['./list-changes.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListChangesComponent implements OnInit {

  // context$: Observable<any>;

  @Input()
  title: string='List of Changes';

  listOfChanges:Change[];

  constructor(protected changeService:ChangeListenService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.listOfChanges=this.changeService.getListOfChanges();
    this.changeService.getChangeEvents ().subscribe(value => {
//      console.log("newVal", value);
        //We have to force refresh when displayed in another tab
      this.ref.detectChanges();
    });
  }

/*  newInit (): void {
    this.listOfChanges=this.changeService.getListOfChanges();
    this.context$ = combineLatest([this.changeService.getChangeEvents()])
      .pipe(map ((change) => {
        console.log("Updating...");
        this.ref.detectChanges();
        return {change};
      }));

  }*/
}
