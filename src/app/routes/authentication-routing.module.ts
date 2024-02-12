import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../authentication/signup/signup.component';
import { OtpComponent } from '../authentication/otp/otp.component';
import { LoginComponent } from '../authentication/login/login.component';

const routes: Routes = [
    {path:"signup",component:SignupComponent},
    {path:"otp",component:OtpComponent},
    {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
