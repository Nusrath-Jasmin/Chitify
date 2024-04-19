import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/modules/chitModule/services/chit.service';


@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.css']
})
export class EmailOtpComponent {

  @ViewChild('otp1') otp1!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2') otp2!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3') otp3!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4') otp4!: ElementRef<HTMLInputElement>;
  @ViewChild('otp5') otp5!: ElementRef<HTMLInputElement>;
  @ViewChild('otp6') otp6!: ElementRef<HTMLInputElement>;

  data!: any;
  userData!: any;
  otperror!: boolean;
  isLoading=false

  constructor(
    private apiCall:apiCall,
    private router:Router
  ) {}

  moveToNext(nextInput: HTMLInputElement) {
    if (nextInput && nextInput.value.length === 0) {
      nextInput.focus();
    }
  }

  onSubmit(form:NgForm) {
    this.isLoading=true
    const { otp1val, otp2val, otp3val, otp4val, otp5val, otp6val } = form.value
    const enteredOTP = otp1val + otp2val + otp3val + otp4val + otp5val + otp6val;
    this.data = { otp: enteredOTP };
    console.log('data for otp verification', this.data);
    this.apiCall.verifyEmailOtp(this.data)
    .subscribe((res) => {
      this.isLoading=false
      console.log('response from otp', res);
      if (res.error) {
        this.otperror = true;
      } else {
        this.otperror = false;
        this.router.navigate(['/user/home'])
      }
    
    });
  }

}
