import { Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean;
  showHead: boolean;

  logout() {
    localStorage.setItem('authenticated', 'false');
    this.showHead = false;
    this.router.navigateByUrl('login');
  }

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
