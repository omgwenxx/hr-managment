import { Component} from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {

  displayedColumns: string[] = ['name', 'teamSize', 'clientName', 'actions'];
  dataSource: Project[];

  constructor(private projectService: ProjectService) {
    this.dataSource = this.projectService.getAll();
  }

  updateProject(updateProject: Project) {
    this.dataSource = this.projectService.update(updateProject);
  }

  deleteProject(deleteProject: Project) {
    this.dataSource = this.projectService.delete(deleteProject);
  }
}
