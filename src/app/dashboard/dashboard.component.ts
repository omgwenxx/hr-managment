import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  employeesClick() {
    console.log("employees click");
    this.router.navigateByUrl('/employees');
  }

  projectsClick() {
    console.log("projects click");
    this.router.navigateByUrl('/projects');
  }
}
