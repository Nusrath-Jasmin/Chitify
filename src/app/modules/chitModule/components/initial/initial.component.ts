import { Component, OnInit, SimpleChanges } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { WebSocketService } from '../../services/webSocket.service';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
})
export class InitialComponent  {
  
  list!:any
  selectedUser: any;
  loading: boolean = false;
  isToday=false
  constructor(private apiservice:apiCall,private webSocketService: WebSocketService){}

    ngOnInit(): void {
      this.fetchData() 

      this.webSocketService.connect();

    // Listen for messages from the server
    this.webSocketService.listen().subscribe((message: any) => {
      // Show spinner until user is selected
      this.loading = true;

      // Display selected user
      this.selectedUser = message;

      // Hide spinner after user is selected
      this.loading = false;
    });
  }
  
  fetchData(){
    this.apiservice.JoinedChits().subscribe({
      next: res => {
        this.list = res;
        console.log(this.list);
      }
    });
    
  }
}
