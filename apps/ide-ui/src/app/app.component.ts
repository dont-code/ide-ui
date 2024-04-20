import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Injector } from '@angular/core';
import { Core } from '@dontcode/core';
import { CommonConfigService, DONT_CODE_CORE } from '@dontcode/plugin-common';
import { LightAppComponent } from '@dontcode/sandbox';
import {environment} from '../environments/environment';

@Component({
  selector: 'ide-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LightAppComponent{
  title = 'ide-ui';

  constructor (configService:CommonConfigService, httpClient: HttpClient, injector: Injector, ref: ChangeDetectorRef,
    @Inject(DONT_CODE_CORE) dontCodeCore: Core
) {
    super (configService, httpClient, injector, ref, dontCodeCore);
    this.defaultRepositoryUrl='assets/repositories/stable.json';
      // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = (window as any).dontCodeConfig;
    if ((this.runtimeConfig!=null) && (this.runtimeConfig?.repositoryUrl==null)) {
      this.runtimeConfig.repositoryUrl=environment.repositoryUrl;
    }

  }
  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')==-1;
  }

}
