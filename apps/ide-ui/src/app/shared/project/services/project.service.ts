import { Injectable } from '@angular/core';
import { DontCodeProject } from '@dontcode/core';
import {Observable, of} from "rxjs";
import {IdeProject} from "../IdeProject";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Array<IdeProject> = [{name: "Test", description:"This is a test project with testing stuff", lastUpdated:new Date(2021,4,22), template:false, current:true},
    {name: "Test2", description:"The famous task manager", lastUpdated:new Date(2021,4,2), template:true},
    {name: "Old Project", description:"The old one", lastUpdated:new Date(2021,1,2), template:false}];

  protected currentProject: IdeProject = this.projects[0];
  constructor() { }

  loadListOfProjects () :Observable<Array<IdeProject>> {
    return of(this.projects);
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
