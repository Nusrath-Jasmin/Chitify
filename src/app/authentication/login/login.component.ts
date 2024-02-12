import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from 'src/app/services/apicalls.service';
import { AuthGuard } from 'src/app/services/authGuard.service';
import { AuthService } from 'src/app/services/userToken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private apicall: apiCall,
    private authservice: AuthService,
    private router: Router
  ) {}
  error!: boolean;

  onSubmit(form: NgForm) {
    console.log('Form submitted!');

    this.apicall.loginUser(form.value).subscribe({
      next: (response) => {
        this.authservice.saveToken(response.token);

        if (this.authservice.isAuthenticated()) {
          if (this.authservice.getUserType() === 'user')
            this.router.navigate(['/user/home']);
          else {
            if (this.authservice.getUserType() === 'admin')
              this.router.navigate(['/admin/home']);
          }
          console.log(response);

          this.error = response.error;
          // console.log(this.error)
        }
      },
      error: (error) => {
        console.log(error);
        this.error = error;
      },
    });
  }
}
