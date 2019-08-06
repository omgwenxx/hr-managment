import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {ProjectViewComponent} from './project-view/project-view.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employees', component: EmployeeViewComponent},
  { path: 'projects', component: ProjectViewComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
