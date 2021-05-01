import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "../../shared/project/services/project.service";
import {IdeComponent} from "../../shared/ui/IdeComponent";
import {IdeProject} from "../../shared/project/IdeProject";
import {ConfirmationService} from "primeng/api";
import {Inplace} from "primeng/inplace";

@Component({
  selector: 'ide-ui-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends IdeComponent implements OnInit {

  projects = new Array<IdeProject>();

  @ViewChild('inPlaceName') inPlaceName: Inplace;

  constructor(protected projectService: ProjectService, protected confirmationService: ConfirmationService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.projectService.loadListOfProjects().subscribe(newList => {
      this.projects=newList;
    }));
  }

  isCurrentProject(project: IdeProject): boolean {
    return this.projectService.isCurrentProject(project);
  }

  currentProjectClass(project: any) {
    if (this.isCurrentProject(project))
      return "current-project-item";
    else
      return null;
  }

  playButtonLabel(project: IdeProject) {
    if( this.projectService.isCurrentProject(project))
      return 'Reload';
    else if (project.template)
      return 'Duplicate';
    else return 'Load';
  }

  saveProject(event:any): void {
    const curProject = this.projectService.getCurrentProject();
    if( !curProject.name || curProject.name.length===0) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Please define a name for your project',
        icon: 'pi pi-exclamation-triangle',
        rejectVisible: false,
        accept: () => {
          this.inPlaceName.activate();
          //this.textName.nativeElement.click();
          //this.editName.nativeElement.focus();
        }
      });
    } else {
      this.projectService.saveCurrentProject();
    }
  }

  loadProject(event:any): void {

  }

  focusLost($event: FocusEvent) {
    this.inPlaceName.deactivate($event);
  }
}
