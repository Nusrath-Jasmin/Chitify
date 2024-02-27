import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from 'src/app/modules/authenticationModule/services/authentication.service';
import { Router } from '@angular/router';
import { SignupdataService } from 'src/app/modules/authenticationModule/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  response!: any;
  form!: any;
  error!: boolean;

  constructor(
    private apiCallService: apiCall,
    private router: Router,
    private signupdata: SignupdataService
  ) {}

  checkPasswordMatch() {}

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.form = form.value;

    this.apiCallService.createUser(form.value).subscribe({
      next: (response) => {
        // Handle successful registration response
        console.log('User registered successfully', response);
        this.response = response;
        if (response.otpsend) {
          this.signupdata.setFormData(this.form);
          this.router.navigate(['/otp']);
        } else {
          this.router.navigate(['/signup']);
        }
      },
      error: (error) => {
        // Handle registration error
        console.error('Error during registration', error);
      },
    });
  }
}
