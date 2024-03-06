import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-joined-chits',
  templateUrl: './joined-chits.component.html',
  styleUrls: ['./joined-chits.component.css']
})
export class JoinedChitsComponent implements OnInit {

  list!:any
  constructor(private apiservice:apiCall){}
  ngOnInit(): void {
    this.apiservice.JoinedChits().subscribe({
      next:res=>{
        this.list=res
        console.log(this.list);
        
      }
    })
  }
}
