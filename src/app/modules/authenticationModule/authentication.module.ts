import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from 'src/app/modules/authenticationModule/components/signup/signup.component';
import { AuthenticationRoutingModule } from 'src/app/modules/authenticationModule/authentication-routing.module';
import { OtpComponent } from 'src/app/modules/authenticationModule/components/otp/otp.component';
import { LoginComponent } from 'src/app/modules/authenticationModule/components/login/login.component';
import { SignupdataService } from 'src/app/modules/authenticationModule/services/data.service';
import { AuthGuard } from 'src/app/services/authGuard.service';
import { ForgotPasswordComponent } from 'src/app/modules/authenticationModule/components/forgot-password/forgot-password.component';
import { ForgotOtpComponent } from 'src/app/modules/authenticationModule/components/forgot-otp/forgot-otp.component';
import { ResetPasswordComponent } from 'src/app/modules/authenticationModule/components/reset-password/reset-password.component';
import { AppModule } from 'src/app/app.module';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
 
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CommonModule,
    HttpClientModule,
    // AppModule
  ],
   declarations: [
    SignupComponent,
    OtpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ForgotOtpComponent, 
    ResetPasswordComponent, SpinnerComponent,
  ],
  providers:[
    SignupdataService,
    AuthGuard
  ]
})
export class AuthenticationModule { }
