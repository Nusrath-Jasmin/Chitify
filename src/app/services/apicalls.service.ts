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
}
