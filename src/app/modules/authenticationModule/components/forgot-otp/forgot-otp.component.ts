import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/modules/authenticationModule/services/authentication.service';
import { SignupdataService } from 'src/app/modules/authenticationModule/services/data.service';

@Component({
  selector: 'app-forgot-otp',
  templateUrl: './forgot-otp.component.html',
  styleUrls: ['./forgot-otp.component.css']
})
export class ForgotOtpComponent implements OnInit {

  isLoading=false

  @ViewChild('otp1') otp1!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2') otp2!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3') otp3!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4') otp4!: ElementRef<HTMLInputElement>;
  @ViewChild('otp5') otp5!: ElementRef<HTMLInputElement>;
  @ViewChild('otp6') otp6!: ElementRef<HTMLInputElement>;


  moveToNext(nextInput: HTMLInputElement) {
    if (nextInput && nextInput.value.length === 0) {
      nextInput.focus();
    }
  }

  forgotPasswordForm!: FormGroup;
  otpError: boolean = false;
  phone!:number

  constructor(private fb: FormBuilder,private apicall:apiCall,private router:Router,private dataservice:SignupdataService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp2: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp3: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp4: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp5: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      otp6: ['', [Validators.required, Validators.pattern(/^\d$/)]]
    });
  }

  submitOtp() {
    if (this.forgotPasswordForm.valid) {
      this.isLoading=true
      this.dataservice.phone$.subscribe(data=>this.phone=data)
      // Construct OTP from form values
      const otp = Object.values(this.forgotPasswordForm.value).join('');
      console.log('OTP:', otp);
      this.apicall.VerifyUser({phone:this.phone,otp:otp}).subscribe({
        next:(response)=>{
          this.isLoading=false
          if(response.otpVerified){
            this.router.navigate(['/reset-password'])
          }else{
            this.otpError = true;
          }
        },
        error:(error)=>{
          this.otpError = true;
        }
      })
    } else {
      this.otpError = true;
    }
  }

}



