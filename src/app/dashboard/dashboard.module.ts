import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CustomMaterialModule} from '../material/material.module';
import {ProjectViewModule} from '../project-view/project-view.module';
import {EmployeeViewModule} from '../employee-view/employee-view.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, CustomMaterialModule, EmployeeViewModule, ProjectViewModule],
  exports: [DashboardRoutingModule]
})
export class DashboardModule { }
