import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../shared/project/services/project.service";
import {IdeComponent} from "../../shared/ui/IdeComponent";
import {IdeProject} from "../../shared/project/IdeProject";

@Component({
  selector: 'ide-ui-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends IdeComponent implements OnInit {

  projects = new Array<IdeProject>();

  constructor(protected projectService: ProjectService) {
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
}
