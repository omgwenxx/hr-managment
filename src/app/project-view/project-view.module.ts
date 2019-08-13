import {ProjectViewComponent} from './project-view.component';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';
import {EditProjectDialogComponent} from './edit-project-dialog/edit-project-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../material/material.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [ProjectViewComponent, AddProjectDialogComponent, EditProjectDialogComponent],
  imports: [CommonModule, CustomMaterialModule, ReactiveFormsModule],
  exports: [ProjectViewComponent],
  entryComponents: [AddProjectDialogComponent, EditProjectDialogComponent]
})
export class ProjectViewModule { }
