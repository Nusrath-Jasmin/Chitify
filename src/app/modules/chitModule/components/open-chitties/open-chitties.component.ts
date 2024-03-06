import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-open-chitties',
  templateUrl: './open-chitties.component.html',
  styleUrls: ['./open-chitties.component.css']
})
export class OpenChittiesComponent implements OnInit {

  chitties: any[] = [];
  buttonText="Request to Join"

  constructor(private apiService: apiCall) { }
  
  ngOnInit(): void {
   this.fetchData()
  }

  fetchData(){
    this.apiService.OpenChitties().subscribe((chitties: any[]) => {
      console.log(chitties);
      
      chitties.forEach(chitty => {
        this.apiService.IsAMember(chitty._id).subscribe((status: any) => {
          chitty.isParticipant = status.participant; 
        });

        // this.apiService.IsRequested().subscribe((status: any) => {
        //   chitty.isRequested = status.request; 
        //   console.log(status); 
        // });

        this.apiService.IsRequested(chitty._id).subscribe((status: any) => {
          chitty.isRequested = status.request;
          chitty.status = status.data[0]?.requestedUsers[0]?.status; // Assuming status is available at index 0
          console.log(chitty.status);
      });
      });
      this.chitties = chitties;
      console.log(chitties);
      
    });
  }

  submit(id:string){
    const data={id:id}
    this.apiService.SubmitRequest(data).subscribe(res=>this.fetchData())
  }
}
