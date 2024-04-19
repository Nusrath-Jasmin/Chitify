import { Component } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  chitId!:string
  userlist: { user: any, message: string }[] = []; 
  user!:any
  message=false
  messgaeText=""
  isLoading=false

  constructor(private apiservice:apiCall,private dataservice:DataService){}
  ngOnInit(): void {
   this.refresh()
  }

refresh(){
  this.dataservice.chitId$.subscribe((res: string)=>this.chitId=res)
    console.log(this.chitId);
    this.apiservice.getUsersToAdd(this.chitId).subscribe(res=>{
      this.userlist = res.map((user: any) => ({ user, message: '' }));
      console.log(res,"poijhgfd",this.userlist);
    })
    console.log(this.userlist);
}

  add(id:string){
    this.isLoading=true
    const data={chitId:this.chitId, invitedUserId :id}
    this.apiservice.sendInvitation(data).subscribe({
      next:res=>{
        this.isLoading=false
        this.message=true
        console.log(res);
        const userIndex = this.userlist.findIndex(item => item.user._id === id);
        if (userIndex !== -1) {
          this.userlist[userIndex].message = res.message ;
        }
        console.log(this.userlist);
        
      },
      error:err=>{
        this.message=true
        const userIndex = this.userlist.findIndex(item => item.user._id === id);
        if (userIndex !== -1) {
          this.userlist[userIndex].message = 'Cannot add user';
        }
      }
    })
  }
}
