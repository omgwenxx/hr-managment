import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean;

  constructor(private router: Router) {
    this.login = false;
  }

  logout() {
    this.login = false;
    localStorage.setItem('authenticated', 'false');
    this.router.navigateByUrl('login');
  }
}
