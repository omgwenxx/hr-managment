import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SharedModule } from './shared/shared.module';
import {EmployeeViewModule} from './employee-view/employee-view.module';
import { AddProjectDialogComponent } from './project-view/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './project-view/edit-project-dialog/edit-project-dialog.component';
import {ProjectViewModule} from './project-view/project-view.module';

const importModules = [
  BrowserModule,
  BrowserAnimationsModule,
  CustomMaterialModule,
  ReactiveFormsModule,
  ProjectViewModule,
  SharedModule];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    ...importModules, AppRoutingModule, FormsModule, EmployeeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
