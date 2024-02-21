import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/services/apicalls.service';
import { SignupdataService } from 'src/app/services/signupdata.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  
  forgotPasswordForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder,private apicall:apiCall,private router:Router,private dataservice:SignupdataService ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  onSubmit(){
    if (this.forgotPasswordForm.valid) {
      const phoneNumber = this.forgotPasswordForm.get('phone')!.value;
      console.log(phoneNumber);
      this.apicall.forgotPassword({phone:phoneNumber}).subscribe({
        next:(response)=>{
          console.log(response); 
          this.dataservice.setData(response.phone)
          if(response.otpsend){
            this.router.navigate(['/forgot-Otp'])
          }
          else{
            this.message=response.message
          }
        },
        error:(error)=>{
          this.message=error.message
          console.log(this.message)
        }
      })

  }
}

}