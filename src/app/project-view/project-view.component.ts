import { Component} from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';
import {EditProjectDialogComponent} from './edit-project-dialog/edit-project-dialog.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {

  displayedColumns: string[] = ['name', 'teamSize', 'clientName', 'actions'];
  dataSource: Project[];

  constructor(private projectService: ProjectService, public dialog: MatDialog) {
    this.dataSource = this.projectService.getAll();
  }

  updateProject(updateProject: Project) {
    this.dataSource = this.projectService.update(updateProject);
  }

  deleteProject(deleteProject: Project) {
    this.dataSource = this.projectService.delete(deleteProject);
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddProjectDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(project => {
      if (!this.projectService.isEmpty(project)) {
        this.dataSource = this.projectService.add(project);
      }
    });
  }

  openEditDialog(editProject: Project) {
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '350px',
      disableClose: true,
      autoFocus: true,
      data: {
        id: editProject.id,
        name: editProject.name,
        clientName: editProject.clientName,
        teamSize: editProject.teamSize}});

    dialogRef.afterClosed().subscribe(project => {
      if (!this.projectService.isEmpty(project)) {
        this.dataSource = this.projectService.update(project);
      }
    });
  }
}
