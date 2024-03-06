import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  invitations:any[]=[]
  noOfInvitation=0
  constructor(private apiservice:apiCall){}

  ngOnInit(): void {
    this.fetchInvitation()
  }
  fetchInvitation(){
    this.apiservice.getInvitations().subscribe({
      next:res=>{
        this.invitations=res
        console.log(res,this.invitations);
        this.noOfInvitation=this.invitations.length
      },
      error:err=>{
        this.invitations=[]
      }
    })
  }

  acceptInvitation(invitationId: string): void {
    const data={invitationId}
this.apiservice.acceptInvitation(data).subscribe()
this.fetchInvitation() 
 }

  rejectInvitation(invitationId: string): void {
    const data={invitationId}
    this.apiservice.rejectInvitation(data).subscribe()
    this.fetchInvitation() 
   }
  }
