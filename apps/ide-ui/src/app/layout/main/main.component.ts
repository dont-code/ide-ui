import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {TextService} from '../../shared/text/services/text.service';
import {ChangeUpdateService} from "../../shared/change/services/change-update.service";
import {environment} from "../../../environments/environment";
import {Change, ChangeType, DontCodeModel, dtcde} from "@dontcode/core";
import {ProjectService} from "../../shared/project/services/project.service";
import { CommonConfigService } from '@dontcode/plugin-common';


@Component({
  selector: 'ide-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy{

  protected subscriptions = new Subscription();

  context$: Observable<
    {
      status:string,
      sessionId:string|undefined
    }>|null = null;

  sidePanelVisible: boolean = true;

  serverUrl ='';

  constructor( protected service:TextService
              , protected updateService:ChangeUpdateService
              , protected projectService: ProjectService
              , protected configService:CommonConfigService
              , protected ref: ChangeDetectorRef
              ) {
    this.subscriptions.add (configService.getUpdates ().subscribe( {
      next: (newConfig) => {
        const changed = newConfig.ideWebSocketUrl!=this.serverUrl;
        if (changed) {
          this.serverUrl=newConfig.ideWebSocketUrl??'';
          this.ref.markForCheck();
          this.ref.detectChanges();
        }
    }}));
  }

  protected sessionId:string|undefined;

  ngOnInit(): void {
    this.sidePanelVisible = true;

    this.context$ = combineLatest([this.updateService.getConnectionStatus(), this.updateService.getSessionId()])
      .pipe(map ((status) => {
        this.sessionId=status[1];
        return {status:status[0], sessionId:status[1]};
      }));

//    this.loadSchema();
    }

  logoClicked() {
    this.sidePanelVisible=true;
  }

  sidePanelVisibleChanged($event: any) {
    //console.log($event);
    this.sidePanelVisible=$event.target.visible;
  }

  /**
   * User wants to re-start from scratch
   */
  loadSchema () {
    this.service.resetSchema();
    this.service.readSchema(dtcde.getSchemaManager().getSchema());
    this.updateService.pushChange(new Change(ChangeType.RESET, DontCodeModel.ROOT,null)).then (
      () => {
        this.projectService.newCurrentProject();
        this.ref.detectChanges();
      },
      (reason) => {
        console.error ('Error while resetting model after a loadSchema', reason);
        this.projectService.newCurrentProject();
        this.ref.detectChanges();
      }
    )
  }

  openDevUrl() {
    window.open('#/newTabDev', '_blank');
  }

  openPreview() {
    if( this.sessionId==null) {
      window.open(environment.previewUrl, '_blank');
    }else {
      window.open(environment.previewUrl+'?sessionId='+this.sessionId, '_blank');
    }
  }

  connectedClass(ctx: { status: string }): string {
    if( ctx.status!=="connected") {
      return "p-button-danger";
    }
    return '';
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}