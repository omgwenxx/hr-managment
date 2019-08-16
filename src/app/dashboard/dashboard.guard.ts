import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('authenticated') === 'true') {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
