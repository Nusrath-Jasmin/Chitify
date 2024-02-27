import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/modules/authenticationModule/services/authentication.service';
import { SignupdataService } from 'src/app/modules/authenticationModule/services/data.service';
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

  onSubmit(form:NgForm) {
    const { otp1val, otp2val, otp3val, otp4val, otp5val, otp6val } = form.value
    const enteredOTP = otp1val + otp2val + otp3val + otp4val + otp5val + otp6val;

    console.log(enteredOTP);
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
