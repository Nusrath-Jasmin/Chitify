import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminApiService {

   private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getRequest():Observable<any>{
    const endpoint = `${this.apiUrl}/admin/getAllRequest`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint,{ headers });
  }

  getUserDetails(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/admin/getUserDetails`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data,{ headers });
  }

  AddAsOwner(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/admin/AddAsOwner`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data,{ headers });
  }

  RejectRequest(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/admin/RejectRequest`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data,{ headers });
  }
}