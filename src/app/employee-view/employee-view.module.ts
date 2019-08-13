import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeViewComponent} from './employee-view.component';
import {AddEmployeeDialogComponent} from './add-employee-dialog/add-employee-dialog.component';
import {CustomMaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/typings/select';

@NgModule({
  declarations: [EmployeeViewComponent, AddEmployeeDialogComponent, EditEmployeeDialogComponent],
  imports: [CommonModule, CustomMaterialModule, ReactiveFormsModule, FormsModule],
  exports: [EmployeeViewComponent, AddEmployeeDialogComponent],
  entryComponents: [AddEmployeeDialogComponent, EditEmployeeDialogComponent]
})
export class EmployeeViewModule { }
