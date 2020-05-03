import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TextService } from '../../shared/text/services/text.service';
import { HttpClient } from '@angular/common/http';
import { Change, ChangeType } from '../../shared/change/change';

@Component({
  selector: 'ide-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver
              , protected service:TextService,
              protected ref: ChangeDetectorRef
              ) {}

  ngOnInit(): void {
        this.loadSchema();
    }

  loadSchema () {
    this.service.resetSchema();
    this.service.readSchemaFormUrl('assets/schemas/dont-code-schema.json');

    this.ref.detectChanges();
  }

  openDevUrl() {
    window.open('newTabDev', '_blank');
  }

}
