import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "../../shared/project/services/project.service";
import {IdeComponent} from "../../shared/ui/IdeComponent";
import {IdeProject} from "../../shared/project/IdeProject";
import {ConfirmationService} from "primeng/api";
import {Inplace} from "primeng/inplace";
import {ChangeUpdateService} from "../../shared/change/services/change-update.service";

@Component({
  selector: 'ide-ui-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends IdeComponent implements OnInit {

  //projects = new Array<IdeProject>();

  @ViewChild('inPlaceName') inPlaceName!: Inplace;

  constructor(public projectService: ProjectService, protected changeUpdateService: ChangeUpdateService, protected confirmationService: ConfirmationService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.projectService.loadListOfProjects().subscribe(newList => {
      //this.projects=newList;
    }));
  }

  isCurrentProject(project: IdeProject): boolean {
    return this.projectService.isCurrentProject(project);
  }

  currentProjectClass(project: any): string {
    if (this.isCurrentProject(project))
      return "current-project-item";
    else
      return '';
  }

  playButtonLabel(project: IdeProject) {
    if( this.projectService.isCurrentProject(project))
      return 'Reload';
    else if (project.template)
      return 'Duplicate';
    else if (project.name)
      return 'Load';
    else
      return 'Select';
  }

  saveCurrentProject(event:Event): void {
    const curProject = this.projectService.getCurrentProject();
    if( !curProject.name || curProject.name.length===0) {
      this.confirmationService.confirm({
        target: event.target?event.target:undefined,
        message: 'Please define a name for your project',
        icon: 'pi pi-exclamation-triangle',
        rejectVisible: false,
        accept: () => {
          this.inPlaceName.activate();
        }
      });
    } else {
      this.projectService.saveCurrentProject();
    }
  }

  loadProject(project:IdeProject): void {
    //console.log("Calling projectService");

    this.projectService.loadAndSetCurrentProject(project, this.changeUpdateService).then(value => {
      //console.log("projectService Call Returned");
      //this.projects=this.projectService.projects;
    });
    //console.log("Called projectService");
  }

}
