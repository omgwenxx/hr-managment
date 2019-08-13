import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.setTimeout(() => {
      if (localStorage.getItem('authenticated') === 'true') {
        this.router.navigateByUrl('dashboard');
      } else {
        this.router.navigateByUrl('login');
      }
    }, 3000);
  }

}
