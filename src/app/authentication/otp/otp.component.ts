import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  otpDigits!:number
  data!:any

  @Input() userData!:any

  constructor(private apiCall:apiCall){}

  onSubmit(){
    this.data={...this.userData,otp:this.otpDigits}
    this.apiCall.verifyOtp(this.data)
    .subscribe(res=>console.log(res))
  }


}
