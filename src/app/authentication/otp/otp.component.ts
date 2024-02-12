import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/services/apicalls.service';
import { SignupdataService } from 'src/app/services/signupdata.service';
import { AuthService } from 'src/app/services/userToken.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {


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
    private apiCall: apiCall,
    private signupdata: SignupdataService,
    private authservice:AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.signupdata.formData$.subscribe((formdata) => {
      this.userData = formdata;
    });
  }

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
    this.data = { ...this.userData, otp: enteredOTP };
    console.log('data for otp verification', this.data);
    this.apiCall.verifyOtp(this.data)
    .subscribe((res) => {
      console.log('response from otp', res);

      this.authservice.saveToken(res.token);

        if (this.authservice.isAuthenticated()) {
          console.log(this.authservice.getUserType());
          
          if (this.authservice.getUserType() === 'user')
          {
            console.log("navigating");
            this.router.navigate(['/user/home']);
          }
        }
      if (res.error) {
        this.otperror = true;
      } else {
        this.otperror = false;
      }
    
    });
  }
}
