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
            this.currentProject.name = 'Enter name';
            this.currentProject.description = 'Enter project description';

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
    return Promise.resolve (this.currentProject);
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
