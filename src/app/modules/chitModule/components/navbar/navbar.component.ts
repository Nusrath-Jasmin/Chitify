import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/userToken.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userToken:AuthService,private router:Router){}

  logout(): void {
    this.userToken.destroyToken();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}

