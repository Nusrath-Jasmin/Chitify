import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiCall {

   private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/signup`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint, userData, { headers });
  }

  verifyOtp(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/verifyOtp`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint, data, { headers });
  }

  loginUser(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/login`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint, data, { headers });
  }

  forgotPassword(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/forgotPassword`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  VerifyUser(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/verify-user`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  UpdatePassword(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/update-password`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }
 
}
