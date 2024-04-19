import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/adminApi.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any[]=[]
  constructor( private apiservice:AdminApiService){}
  ngOnInit(): void {
    this.apiservice.getUsers().subscribe({
      next:res=>{
        this.users=res
      },
      error:err=>{
        this.users=[]
      }
    })
  }

}
