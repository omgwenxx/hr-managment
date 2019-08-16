import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {EmployeeService} from '../employee.service';
import {Project} from '../../project-view/project';
import {ProjectService} from '../../project-view/project.service';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.css']
})
export class EditEmployeeDialogComponent implements OnInit {

  employeeForm = new FormGroup({});
  projects: Project[];
  editEmployee;
  constructor(
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private employeeService: EmployeeService,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getAll();
    this.employeeForm.addControl('name', new FormControl(this.data.name, [
      Validators.required,
      Validators.minLength(3)
    ]));
    this.employeeForm.addControl('company', new FormControl(this.data.company, [
      Validators.required,
      Validators.minLength(3)
    ]));
    this.employeeForm.addControl('birthday', new FormControl(this.data.birthday, [
      Validators.required,
    ]));
    this.employeeForm.addControl('color', new FormControl('#000000'));
    this.employeeForm.addControl('project', new FormControl());

    this.editEmployee = {
      id: this.data.id,
      name: this.data.name,
      company: this.data.company,
      age: this.data.age,
      birthday: this.data.birthday,
      favoriteColor: this.data.favoriteColor,
      project: this.data.project};
    const teamSize = this.editEmployee.project.teamSize;
    const updatedProject = {
      ...this.editEmployee.project,
      teamSize: teamSize - 1
    };
    this.projectService.update(updatedProject);
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const employee = this.employeeForm.value;
    const teamSize = employee.project.teamSize;
    const updatedProject = {
      ...employee.project,
      teamSize: teamSize + 1
    };
    this.dialogRef.close({
      id: this.editEmployee.id,
      name: employee.name,
      company: employee.company,
      age: this.employeeService.calculateAge(employee.birthday),
      birthday: employee.birthday,
      favoriteColor: employee.color,
      projectId: updatedProject.id});
    this.projectService.update(updatedProject);
  }
}
