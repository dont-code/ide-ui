import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IdeProject} from "../IdeProject";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {dtcde} from "@dontcode/core";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<IdeProject> = [];

  protected currentProject: IdeProject;
  constructor(protected http: HttpClient) {
    this.currentProject=new IdeProject();
    this.currentProject.template=false;
    this.currentProject.current = true;
  }

  loadListOfProjects () :Observable<Array<IdeProject>> {
    if (this.projects.length===0) {
      return this.http.get<Array<IdeProject>>(environment.projectUrl).pipe(
        map(newProjects => {
          this.projects=this.placeCurrentProject(newProjects);
          return this.projects;
        }));
    } else {
      return of(this.projects);
    }
  }

  placeCurrentProject (projects:Array<IdeProject>) {
    // Keep the currentProject at first place in the list
    const found = projects.findIndex(value => {
      return value.name === this.currentProject.name;
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
    const toSave = {...this.currentProject};
    delete toSave.current;  // We don't want to save the fact it's the current project

    const model = dtcde.getModelManager().getContent();
    toSave.content = model;
    if( toSave._id) {
      return this.http.put<IdeProject>(environment.projectUrl+'/'+this.currentProject.name, toSave, {responseType:"json"} ).toPromise().then (value => {
        delete value.content;
        return value;
      });
    } else {
      return this.http.post<IdeProject>(environment.projectUrl, toSave, {responseType:"json"} ).toPromise().then(value => {
        this.currentProject._id=value._id;
        return this.currentProject;
      });
    }

  }

  loadProject (prj:IdeProject): Promise<IdeProject> {
    if( prj.name) {
      return this.http.get<IdeProject>(environment.projectUrl + '/' + prj.name, {responseType: 'json'}).toPromise();
    } else {
      return Promise.resolve(prj);
    }
  }

  setCurrentProject (prj:IdeProject): void {
    if( this.currentProject?.current) {
      delete this.currentProject.current;
    }
    this.currentProject=prj;
    this.currentProject.current = true;
    this.projects = this.placeCurrentProject(this.projects);
  }

  getCurrentProject (): IdeProject {
    return this.currentProject;
  }

  isCurrentProject (prj:IdeProject): boolean {
    if (prj.current)  return prj.current;
    else
      return false;
  }

}
