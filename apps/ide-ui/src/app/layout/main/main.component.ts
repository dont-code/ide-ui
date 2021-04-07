import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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

  sidePanelVisible: boolean;

  constructor( protected service:TextService
              , protected updateService:ChangeUpdateService
              , protected ref: ChangeDetectorRef
              ) {

  }

  ngOnInit(): void {
    this.sidePanelVisible = true;

    this.context$ = combineLatest([this.updateService.getConnectionStatus()])
      .pipe(map ((status) => {
        return {status:status[0]};
      }));

    this.loadSchema();
    }

  logoClicked() {
    this.sidePanelVisible=true;
  }

  sidePanelVisibleChanged($event: any) {
    //console.log($event);
    this.sidePanelVisible=$event.target.visible;
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

  connectedClass(ctx: { status: string }): string {
    if( ctx.status!=="connected") {
      return "p-button-danger";
    }
  }

}
