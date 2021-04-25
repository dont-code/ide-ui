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
        map(value => {
          this.projects=value;
          this.currentProject=null;
          return value;
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
