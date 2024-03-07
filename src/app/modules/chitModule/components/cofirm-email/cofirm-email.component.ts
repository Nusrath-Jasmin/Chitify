import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/modules/chitModule/services/chit.service';

@Component({
  selector: 'app-cofirm-email',
  templateUrl: './cofirm-email.component.html',
  styleUrls: ['./cofirm-email.component.css']
})
export class CofirmEmailComponent {

  isLoading=false
  constructor(private apicall:apiCall,private router:Router){}

  cofirmEmail(){
    this.isLoading=true
    this.apicall.confirmEmail().subscribe({
      next:(response)=>{
        this.isLoading=false
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
