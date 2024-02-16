import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-cofirm-email',
  templateUrl: './cofirm-email.component.html',
  styleUrls: ['./cofirm-email.component.css']
})
export class CofirmEmailComponent {

  constructor(private apicall:apiCall,private router:Router){}

  cofirmEmail(){
    this.apicall.confirmEmail().subscribe({
      next:(response)=>{
        if(response.success){
          this.router.navigate(['/user/email-otp'])
        }
      },
      error:(error)=>{
        console.log("cant send otp to mail");
        
      }
    })
  }

}
