import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../employee-view/employee.service';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.css']
})
export class EditProjectDialogComponent implements OnInit {

  projectForm = new FormGroup({});
  editProject;
  constructor(
    private dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    this.projectForm.addControl('name', new FormControl(this.data.name, [
      Validators.required,
      Validators.minLength(3)
    ]));
    this.projectForm.addControl('clientName', new FormControl(this.data.company, [
      Validators.required,
      Validators.minLength(3)
    ]));
    this.projectForm.addControl('teamSize', new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]));
    this.editProject = {
      id: this.data.id,
      name: this.data.name,
      clientName: this.data.clientName,
      teamSize: this.data.teamSize};
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const project = this.projectForm.value;
    this.dialogRef.close({
      id: this.editProject.id,
      name: project.name,
      teamSize: project.teamSize,
      clientName: project.clientName});
  }

}
