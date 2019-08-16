import { DashboardGuard } from './dashboard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {EmployeeViewComponent} from '../employee-view/employee-view.component';
import {ProjectViewComponent} from '../project-view/project-view.component';

const paths: Routes = [
  { path: '',  component: DashboardComponent, canActivate: [DashboardGuard] },
  { path: 'employees', component: EmployeeViewComponent, canActivate: [DashboardGuard] },
  { path: 'projects', component: ProjectViewComponent, canActivate: [DashboardGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(paths)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
