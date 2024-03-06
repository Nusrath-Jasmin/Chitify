import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiCall } from 'src/app/modules/chitModule/services/chit.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  user!:any
  constructor(private apicall:apiCall,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.apicall.userProfile().subscribe({
      next:res=>{
        this.user=res
        console.log(this.user); 
      },
      error:err=>this.user=[]
    })
  }

  beAnOwner(){

    this.apicall.checkEmailverifiedOrNot().subscribe({
      next:(response)=>{
        console.log(response);
        
        if(!response.email){
          console.log(response);
          this.router.navigate(['confirm-email'],{ relativeTo: this.route })  //or
          // this.router.navigateByUrl('/user/home/confirm-email')
        }else{
          // this.router.navigateByUrl('/user/home/beanowner')    //or
          this.router.navigate(['beanowner'],{ relativeTo: this.route })
        }
      },
      error:(error)=>{

      }
    })
    
  }

}
