import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiCall } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private apicall:apiCall,private router:Router,private route:ActivatedRoute){}

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
