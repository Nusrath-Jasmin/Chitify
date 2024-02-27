import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './userToken.service';
import { root } from 'postcss';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const userType = this.authService.getUserType();
      if (state.url.includes('/user') && userType === 'user') {
        return true; // Allow access to user routes only for user type
      } else if (state.url.includes('/admin') && userType === 'admin') {
        return true; // Allow access to admin routes only for admin type
      }
      // Redirect to login if user type doesn't match route
      this.router.navigate(['/login']);
      return false;
    } else {
      // Redirect to login if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}