import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {EmployeeService} from '../employee.service';
import {Project} from '../../project-view/project';
import {ProjectService} from '../../project-view/project.service';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    company: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    birthday: new FormControl(null, [
      Validators.required
    ]),
    color: new FormControl('#000000'),
    project: new FormControl(null)
  });
  projects: Project[];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private employeeService: EmployeeService,
    private projectService: ProjectService) {
  }

  save() {
    const employee = this.employeeForm.value;
    const teamSize = employee.project.teamSize;
    const updatedProject = {
      ...employee.project,
      teamSize: teamSize + 1
    };
    this.projectService.update(updatedProject);
    this.dialogRef.close({
      id: this.employeeService.createId(),
      name: employee.name,
      company: employee.company,
      age: this.employeeService.calculateAge(employee.birthday),
      birthday: employee.birthday,
      favoriteColor: employee.color,
      project: updatedProject});
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }
}

