import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {combineLatest, Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {TextService} from '../../shared/text/services/text.service';
import {ChangeUpdateService} from "../../shared/change/services/change-update.service";
import {environment} from "../../../environments/environment";
import {dtcde} from "@dontcode/core";


@Component({
  selector: 'ide-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  context$: Observable<
    {
      status:string
    }>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver
              , protected service:TextService
              , protected updateService:ChangeUpdateService
              , protected ref: ChangeDetectorRef
              ) {

  }

  ngOnInit(): void {
    this.context$ = combineLatest([this.updateService.getConnectionStatus()])
      .pipe(map ((status) => {
        return {status:status[0]};
      }));

    this.loadSchema();
    }

  loadSchema () {
    this.service.resetSchema();
    this.service.readSchema(dtcde.getSchemaManager().getSchema());
//    this.service.readSchemaFormUrl('assets/core/'+DontCode.dtcde.getSchemaUri());

    this.ref.detectChanges();
  }

  openDevUrl() {
    window.open('#/newTabDev', '_blank');
  }

  openPreview() {
    window.open(environment.previewUrl, '_blank');
  }
}
