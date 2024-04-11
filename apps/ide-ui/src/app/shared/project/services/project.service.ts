import {Injectable, OnDestroy} from '@angular/core';
import {firstValueFrom, Observable, of, Subscription, throwError} from "rxjs";
import {IdeProject} from "../IdeProject";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Change, ChangeType, dtcde} from "@dontcode/core";
import {ChangeUpdateService} from "../../change/services/change-update.service";
import { CommonConfigService } from '@dontcode/plugin-common';

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements OnDestroy{

  protected subscriptions = new Subscription();
  projects: Array<IdeProject> = [];

  protected currentProject: IdeProject;
  projectApiUrl: string|null = null;

  constructor(protected http: HttpClient, protected configService: CommonConfigService) {
    this.currentProject=new IdeProject();
    this.currentProject.template=false;
    this.currentProject.current = true;
      // Receive any updates of the project urls
    this.subscriptions.add(this.configService.getUpdates().subscribe ( {
      next: (newConfig) => {
        this.projectApiUrl = newConfig.projectApiUrl??null;
      }
    }));
  }

  loadListOfProjects () :Observable<Array<IdeProject>> {
    if (this.projectApiUrl!=null) {
      return this.http.get<Array<IdeProject>>(this.projectApiUrl).pipe(
        map(newProjects => {
          this.projects=this.placeCurrentProject(newProjects);
          return this.projects;
        }));
    } else {
      return throwError ( () => new Error ("No API provided to load projects"));
    }
  }

  placeCurrentProject (projects:Array<IdeProject>) {
    // Keep the currentProject at first place in the list
    const found = projects.findIndex(value => {
      return value._id === this.currentProject._id;
    });
    if( found === -1) {
      projects=[this.currentProject, ...projects];
    } else {
      projects.splice(found, 1);
      projects=[this.currentProject, ...projects];
    }
    return projects;

  }

  saveCurrentProject (): Promise<IdeProject> {
    if (this.projectApiUrl!=null) {

      const toSave = {...this.currentProject};
      delete toSave.current;  // We don't want to save the fact it's the current project

      const model = dtcde.getModelManager().getContent();
      toSave.content = model;
      if( toSave._id) {
        return firstValueFrom(this.http.put<IdeProject>(this.projectApiUrl+'/'+this.currentProject.name, toSave, {responseType:"json"} ).pipe(
          map (value => {
          delete value.content;
          return value;
        }))
        );
      } else {
        return firstValueFrom(this.http.post<IdeProject>(this.projectApiUrl, toSave, {responseType:"json"} ).pipe (
          map (value => {
            this.currentProject._id=value._id;
            return this.currentProject;
          }))
        );
      }
    } else {
      return Promise.reject ( new Error ("No API provided to save project."));
    }

  }

  loadProject (prj:IdeProject): Promise<IdeProject> {
    if( prj.name) {
      if (this.projectApiUrl!=null) {
        return firstValueFrom(this.http.get<IdeProject>(this.projectApiUrl + '/' + prj.name, {responseType: 'json'}));
      } else {
        return Promise.reject ( new Error ("No API provided to load project."));
      }
  
    } else {
      return Promise.resolve(prj);
    }
  }

  /**
   * Creates a new empty project and sets it as current project
   */
  newCurrentProject (): IdeProject {
    this.setCurrentProject(new IdeProject());
    return this.currentProject;
  }

  setCurrentProject (prj:IdeProject): void {
    if( this.currentProject?.current) {
      delete this.currentProject.current;
    }
    this.currentProject=prj;
    this.currentProject.current = true;
    this.projects = this.placeCurrentProject(this.projects);
  }

  loadAndSetCurrentProject (prj:IdeProject, updateService: ChangeUpdateService) : Promise<IdeProject>{
   // console.log("Loading Project");
    return this.loadProject(prj).then (value => {
     // console.log("Setting current Project");
      this.setCurrentProject(value);
      // console.log("Pushing update");
      updateService.pushChange(new Change(ChangeType.RESET, '', value.content));
      // console.log("Loading Project done");
      return value;
    })

  }

  getCurrentProject (): IdeProject {
    return this.currentProject;
  }

  isCurrentProject (prj:IdeProject): boolean {
    if (prj.current)  return prj.current;
    else
      return false;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
