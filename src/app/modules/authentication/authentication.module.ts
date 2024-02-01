import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';
import { AuthenticationRoutingModule } from 'src/app/routes/authentication-routing.module';


@NgModule({
 
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CommonModule
  ],
   declarations: [
    SignupComponent
  ]
})
export class AuthenticationModule { }
