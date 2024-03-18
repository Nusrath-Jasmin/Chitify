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

  IsAMember(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/IsAMember/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  IsRequested(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/IsRequested/${id}`; 
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

  AcceptRequest(data:any):Observable<any>{
    console.log(data);
    const endpoint = `${this.apiUrl}/user/AcceptRequest`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data,{ headers});
  }

  RejectRequest(data:any):Observable<any>{
    console.log(data);
    const endpoint = `${this.apiUrl}/user/RejectRequest`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(endpoint,data,{ headers});
  }

  getParticipants(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/getParticipants/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint, { headers});
  }

  removeUser(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/removeUser`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  getUsersToAdd(id:string):Observable<any>{
    const endpoint = `${this.apiUrl}/user/getUsersToAdd/${id}`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint,   { headers});
  }

  sendInvitation(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/sendInvitation`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers});
  }

  getInvitations():Observable<any>{
    const endpoint = `${this.apiUrl}/user/invitations`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(endpoint,   { headers});
  }

  acceptInvitation(data:any):Observable<any>{
    const endpoint = `${this.apiUrl}/user/acceptInvitation`; 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(endpoint,data, { headers})
}

rejectInvitation(data:any):Observable<any>{
  const endpoint = `${this.apiUrl}/user/rejectInvitation`; 
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(endpoint,data, { headers})
}

updateProfile(data:any):Observable<any>{
  const endpoint = `${this.apiUrl}/user/updateProfile`; 
  return this.http.post<any>(endpoint,data)
}

userProfile():Observable<any>{
  const endpoint = `${this.apiUrl}/user/userProfile`; 
  return this.http.get<any>(endpoint)
}

JoinedChits():Observable<any>{
  const endpoint = `${this.apiUrl}/user/allJoinedChits`; 
  return this.http.get<any>(endpoint)
}

getMonthlyStatus(chitId:string):Observable<any>{
  const endpoint = `${this.apiUrl}/user/getMonthlyStatus/${chitId}`; 
  return this.http.get<any>(endpoint)
}

createRazPayOrder(data:any):Observable<any>{
  const endpoint = `${this.apiUrl}/user/createOrder`; 
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(endpoint,data, { headers});
}

onsuccessPayment(data:any):Observable<any>{
  const endpoint = `${this.apiUrl}/user/onSuccessPayment`; 
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(endpoint,data, { headers});
}

getUSerWhoPaid(data:any):Observable<any>{
  const endpoint = `${this.apiUrl}/user/getUsersWhoPaid/${data}`; 
  return this.http.get<any>(endpoint);
}
}