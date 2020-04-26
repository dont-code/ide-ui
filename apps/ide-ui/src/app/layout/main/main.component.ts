import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TextService } from '../../shared/text/services/text.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ide-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver
              , protected service:TextService
              , protected http:HttpClient) {}

  loadSchema () {
    this.http.get('assets/schemas/dont-code-schema.json', {responseType:'json'}).subscribe(value => {
      this.service.readSchema(value);
    });
  }

  openDevUrl() {
    window.open('dev', '_blank');
  }

  mainTab(): boolean {
    return window.location.pathname.indexOf('/dev')==-1;
  }
}
