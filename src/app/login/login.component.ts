import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminUsername = 'admin';
  adminpassword = 'password';
  loginForm = new FormGroup({
    username: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (true) {
      localStorage.setItem('authenticated', 'true');
      this.router.navigateByUrl('/dashboard');
    }
  }
}
