import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  chitId!:string
  userlist:any[]=[]
  user!:any
  deleted=false

  constructor(private apiservice:apiCall,private dataservice:DataService){}
  ngOnInit(): void {
   this.refresh()
  }

refresh(){
  this.dataservice.chitId$.subscribe(res=>this.chitId=res)
    console.log(this.chitId);
    this.apiservice.getParticipants(this.chitId).subscribe(res=>{
      this.userlist=res?.result
      console.log(res);
    })
    console.log(this.userlist);
}

  getUser(userId:string){
    this.apiservice.getUser(userId).subscribe({
      next:res=>{
        this.user=res
        console.log(this.user);
        
      }
    })
  }
  remove(userId:string){
    const data={userId,chitId:this.chitId}
    this.apiservice.removeUser(data).subscribe({
      next:res=>{
        if(res.delete){
          this.deleted=true
          this.refresh()
        }
        else{
          this.deleted=false
        }
      },
      error:err=>{
        this.deleted=false
      }
    })
  }
}
