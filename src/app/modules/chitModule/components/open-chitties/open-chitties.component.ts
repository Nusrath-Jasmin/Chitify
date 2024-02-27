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
      chitties.forEach(chitty => {
        this.apiService.IsAMember().subscribe((status: any) => {
          chitty.isParticipant = status.participant; 
        });
        this.apiService.IsRequested().subscribe((status: any) => {
          chitty.isRequested = status.request; 
        });
      });
      this.chitties = chitties;
    });
  }

  submit(id:string){
    const data={id:id}
    this.apiService.SubmitRequest(data).subscribe(res=>this.fetchData())
  }
}
