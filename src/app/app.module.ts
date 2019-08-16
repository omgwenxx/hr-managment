import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import {EmployeeViewModule} from './employee-view/employee-view.module';
import {ProjectViewModule} from './project-view/project-view.module';
import {DashboardModule} from './dashboard/dashboard.module';

const importModules = [
  BrowserModule,
  BrowserAnimationsModule,
  DashboardModule,
  CustomMaterialModule,
  ReactiveFormsModule,
  ProjectViewModule,
  SharedModule];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    ...importModules, AppRoutingModule, FormsModule, EmployeeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
