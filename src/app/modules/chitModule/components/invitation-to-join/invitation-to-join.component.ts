import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-invitation-to-join',
  templateUrl: './invitation-to-join.component.html',
  styleUrls: ['./invitation-to-join.component.css']
})
export class InvitationToJoinComponent implements OnInit {

  invitations: any[] = [];
  noOfInvitation = 0;
  isLoading = false;
  constructor(private apiservice: apiCall) {}

  ngOnInit(): void {
    this.fetchInvitation();
  }
  fetchInvitation() {
    this.apiservice.getInvitations().subscribe({
      next: (res) => {
        this.invitations = res;
        console.log(res, this.invitations);
        this.noOfInvitation = this.invitations.length;
      },
      error: (err) => {
        this.invitations = [];
      },
    });
  }

  acceptInvitation(invitationId: string): void {
    this.isLoading = true;
    const data = { invitationId };
    this.apiservice.acceptInvitation(data).subscribe();
    this.fetchInvitation();
    this.isLoading = false;
  }

  rejectInvitation(invitationId: string): void {
    this.isLoading = true;
    const data = { invitationId };
    this.apiservice.rejectInvitation(data).subscribe();
    this.fetchInvitation();
    this.isLoading = false;
  }
}
