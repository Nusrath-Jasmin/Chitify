import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class apiCall {

   private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  confirmEmail():Observable<any>{
    const endpoint = `${this.apiUrl}/user/confirmEmail`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,{ headers });
  }

  verifyEmailOtp(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/verifyEmailOtp`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint, data, { headers});
  }

  checkEmailverifiedOrNot():Observable<any>{
    const endpoint = `${this.apiUrl}/user/checkEmailverifiedOrNot`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  applyForOwnerPosition(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/applyForChitOwnership`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  RequestSubmittedorNot():Observable<any>{
    const endpoint = `${this.apiUrl}/user/RequestSubmittedorNot`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  isOwner():Observable<any>{
    const endpoint = `${this.apiUrl}/user/isOwner`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  RegisterChit(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/RegisterChit`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  OwnedChitties():Observable<any>{
    const endpoint = `${this.apiUrl}/user/OwnedChitties`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  UpdateChitty(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/UpdateChitty`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(endpoint,data, { headers});
  }

  DeleteChitty(id:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/DeleteChitty/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(endpoint, { headers});
  }

  OpenChitties():Observable<any>{
    const endpoint = `${this.apiUrl}/user/openChitties`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  IsAMember():Observable<any>{
    const endpoint = `${this.apiUrl}/user/IsAMember`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  IsRequested():Observable<any>{
    const endpoint = `${this.apiUrl}/user/IsRequested`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  SubmitRequest(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/SubmitRequest`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data,{ headers});
  }

  getRequest(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/getRequests/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  getUser(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/getUser/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

}