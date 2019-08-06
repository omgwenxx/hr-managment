import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './nav/nav.component';

const importModules = [BrowserModule, BrowserAnimationsModule, CustomMaterialModule, ReactiveFormsModule, SharedModule];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    EmployeeViewComponent,
    ProjectViewComponent,
    NavComponent
  ],
  imports: [
    ...importModules, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
