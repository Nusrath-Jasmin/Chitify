import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from 'src/app/modules/authenticationModule/services/authentication.service';
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
  isLoading: boolean = false;
  errorMessage="Cant login Try Again!"

  onSubmit(form: NgForm) {
    console.log('Form submitted!');
    this.isLoading=true
    this.apicall.loginUser(form.value).subscribe({
      next: (response) => {
        console.log("logined")
        this.authservice.saveToken(response.token);
        this.isLoading=false
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

  onAlertClosed(){
    this.error=false
  }
}
