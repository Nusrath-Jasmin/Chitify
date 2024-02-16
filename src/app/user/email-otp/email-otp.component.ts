import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/services/apicalls.service';
import { SignupdataService } from 'src/app/services/signupdata.service';
import { AuthService } from 'src/app/services/userToken.service';

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

  otp1val: string = '';
  otp2val: string = '';
  otp3val: string = '';
  otp4val: string = '';
  otp5val: string = '';
  otp6val: string = '';

  data!: any;
  userData!: any;
  otperror!: boolean;

  constructor(
    private apiCall:apiCall,
    private router:Router
  ) {}

  moveToNext(nextInput: HTMLInputElement) {
    if (nextInput && nextInput.value.length === 0) {
      nextInput.focus();
    }
  }

  submitOtp() {
    const enteredOTP =
      this.otp1val +
      this.otp2val +
      this.otp3val +
      this.otp4val +
      this.otp5val +
      this.otp6val;
    this.data = { otp: enteredOTP };
    console.log('data for otp verification', this.data);
    this.apiCall.verifyEmailOtp(this.data)
    .subscribe((res) => {
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
