import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';
import { AuthenticationRoutingModule } from 'src/app/routes/authentication-routing.module';
import { OtpComponent } from 'src/app/authentication/otp/otp.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { SignupdataService } from 'src/app/services/signupdata.service';
import { AuthGuard } from 'src/app/services/authGuard.service';


@NgModule({
 
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CommonModule,
    HttpClientModule
  ],
   declarations: [
    SignupComponent,
    OtpComponent,
    LoginComponent
  ],
  providers:[
    SignupdataService,
    AuthGuard
  ]
})
export class AuthenticationModule { }
