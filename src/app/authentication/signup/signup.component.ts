import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private apiCallService: apiCall) { }


  onSubmit(form: NgForm): void {
    console.log(form.value);

    this.apiCallService.createUser(form.value)
      .subscribe(
        response => {
          // Handle successful registration response
          console.log('User registered successfully', response);
        },
        error => {
          // Handle registration error
          console.error('Error during registration', error);
        }
      );
  }

}
