import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Injector } from '@angular/core';
import { Change, ChangeType, Core, DontCodeModel, dtcde } from '@dontcode/core';
import { CommonConfigService, DONT_CODE_CORE } from '@dontcode/plugin-common';
import { LightAppComponent } from '@dontcode/sandbox';
import {environment} from '../environments/environment';
import { ChangeUpdateService } from './shared/change/services/change-update.service';
import { ProjectService } from './shared/project/services/project.service';
import { TextService } from './shared/text/services/text.service';
import { SandboxRepositorySchema } from '@dontcode/sandbox/lib/shared/definitions';

@Component({
  selector: 'ide-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LightAppComponent{
  title = 'ide-ui';

  constructor (configService:CommonConfigService, protected service:TextService
    , protected updateService:ChangeUpdateService
    , protected projectService: ProjectService, httpClient: HttpClient, injector: Injector, ref: ChangeDetectorRef,
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

  /**
   * Initializa all services after all plugins and config are being loaded.
   * @param config
   * @param repoUrl 
   */
  protected afterInitialization(config: SandboxRepositorySchema, repoUrl: string): Promise<void> {
      
    this.service.resetSchema();
    this.service.readSchema(dtcde.getSchemaManager().getSchema());
  //    this.service.readSchemaFormUrl('assets/core/'+DontCode.dtcde.getSchemaUri());
    return this.updateService.pushChange(new Change(ChangeType.RESET, DontCodeModel.ROOT,null)).then (
      () => {
        this.projectService.newCurrentProject();
      },
      (reason) => {
        console.error ('Error while resetting model after a loadSchema', reason);
        this.projectService.newCurrentProject();
      }
    )
  }
}
