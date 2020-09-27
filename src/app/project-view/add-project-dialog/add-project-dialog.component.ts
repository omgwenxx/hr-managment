import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {EmployeeService} from '../../employee-view/employee.service';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent{

  projectForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    clientName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    teamSize: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(1),
    ])
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private projectService: ProjectService) {
  }

  save() {
    const project = this.projectForm.value;
    this.dialogRef.close({
      id: this.projectService.createId(),
      name: project.name,
      teamSize: project.teamSize,
      clientName: project.clientName});
  }

  close() {
    this.dialogRef.close();
  }
}
