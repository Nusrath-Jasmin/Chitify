import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apiCall } from 'src/app/modules/authenticationModule/services/authentication.service';
import { SignupdataService } from 'src/app/modules/authenticationModule/services/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  response!: any;
  form!: any;
  error!: boolean;
  phone!:number

  constructor(private apiCallService: apiCall, private router: Router,private dataservice:SignupdataService) {}

  checkPasswordMatch() {}

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.form = form.value;
    this.dataservice.phone$.subscribe(data=>this.phone=data)
    this.apiCallService.UpdatePassword({phone:this.phone,...form.value}).subscribe({
      next: (response) => {
        if (response.updated) this.router.navigate(['/login']);
        else this.error = true;
      },
      error: (error) => {
        this.error = true;
      },
    });
  }
}
