import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private tokenKey!: string;

  saveToken(token: string) {
    localStorage.setItem('token', token);
    console.log('token saved');
    this.tokenKey = token;
  }

  isAuthenticated(): boolean {
    console.log('user auth is ...');
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  getUserType(): string {
    console.log('user type is ...');

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.userType || ''; // Return userType if present, otherwise return empty string
      } catch (error) {
        console.error('Error decoding token:', error);
        return ''; // Return empty string if decoding fails
      }
    }
    return ''; // Return empty string if token is not present
  }

  destroyToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
