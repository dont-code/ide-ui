import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IdeProject} from "../IdeProject";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<IdeProject> = [];

  protected currentProject: IdeProject = this.projects[0];
  constructor(protected http: HttpClient) { }

  loadListOfProjects () :Observable<Array<IdeProject>> {
    if (this.projects.length===0) {
      return this.http.get<Array<IdeProject>>(environment.projectUrl).pipe(
        map(newProjects => {
          let found;
          if( !this.currentProject) {
            this.currentProject=new IdeProject();
            this.currentProject.template=false;
            this.currentProject.current = true;
          }
          // Keep the currentProject at first place in the list
          found = newProjects.findIndex(value => {
            return value.name === this.currentProject.name;
          });
          if( found === -1) {
            this.projects=[this.currentProject, ...newProjects];
          } else {
            this.projects=[this.currentProject, ...newProjects.splice(found, 1)];
          }
          return this.projects;
        }));
    } else {
      return of(this.projects);
    }
  }

  saveCurrentProject (): Promise<IdeProject> {
    const toSave = {...this.currentProject};
    delete toSave.current;  // We don't want to save the fact it's the current project
    if( toSave._id) {
      return this.http.put<IdeProject>(environment.projectUrl+'/'+this.currentProject.name, toSave, {responseType:"json"} ).toPromise();
    } else {
      return this.http.post<IdeProject>(environment.projectUrl, toSave, {responseType:"json"} ).toPromise().then(value => {
        this.currentProject._id=value._id;
        return this.currentProject;
      });
    }

  }

  setCurrentProject (prj:IdeProject): void {
    if( this.currentProject?.current) {
      delete this.currentProject.current;
    }
    this.currentProject=prj;
    prj.current = true;
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
