import { NgModule } from '@angular/core';
import { UserRoutingModule } from 'src/app/routes/user-routing.module';
import { HomeComponent } from 'src/app/user/home/home.component';
import { NavbarComponent } from 'src/app/user/navbar/navbar.component';
import { SidebarComponent } from 'src/app/user/sidebar/sidebar.component';
import { CofirmEmailComponent } from 'src/app/user/cofirm-email/cofirm-email.component';
import { InitialComponent } from 'src/app/user/initial/initial.component';
import { EmailOtpComponent } from 'src/app/user/email-otp/email-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeAnOwnerComponent } from 'src/app/user/be-an-owner/be-an-owner.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    CofirmEmailComponent,
    InitialComponent,
    EmailOtpComponent,
    BeAnOwnerComponent,
  ],
  imports: [
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UserModule { }
