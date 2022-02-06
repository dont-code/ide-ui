import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IdeProject} from "../IdeProject";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Change, ChangeType, dtcde} from "@dontcode/core";
import {ChangeUpdateService} from "../../change/services/change-update.service";

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
//    if (this.projects.length===0) {
      return this.http.get<Array<IdeProject>>(environment.projectUrl).pipe(
        map(newProjects => {
          this.projects=this.placeCurrentProject(newProjects);
          return this.projects;
        }));
  /*  } else {
      return of(this.projects);
    }*/
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

}
