import { NgModule } from '@angular/core';
import { UserRoutingModule } from 'src/app/modules/chitModule/chit-routing.module';
import { HomeComponent } from 'src/app/modules/chitModule/components/home/home.component';
import { NavbarComponent } from 'src/app/modules/chitModule/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/modules/chitModule/components/sidebar/sidebar.component';
import { CofirmEmailComponent } from 'src/app/modules/chitModule/components/cofirm-email/cofirm-email.component';
import { InitialComponent } from 'src/app/modules/chitModule/components/initial/initial.component';
import { EmailOtpComponent } from 'src/app/modules/chitModule/components/email-otp/email-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeAnOwnerComponent } from 'src/app/modules/chitModule/components/be-an-owner/be-an-owner.component';
import { DataService } from './services/data.service';
import { apiCall } from './services/chit.service';
import { StartChittyComponent } from './components/start-chitty/start-chitty.component';
import { OwnedChittiesComponent } from './components/owned-chitties/owned-chitties.component';
import { OpenChittiesComponent } from './components/open-chitties/open-chitties.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { JoinedChitsComponent } from './components/joined-chits/joined-chits.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    CofirmEmailComponent,
    InitialComponent,
    EmailOtpComponent,
    BeAnOwnerComponent,
    StartChittyComponent,
    OwnedChittiesComponent,
    OpenChittiesComponent,
    ListUsersComponent,
    AddUsersComponent,
    UpdateProfileComponent,
    JoinedChitsComponent,
  ],
  imports: [
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers:[
    DataService,
    apiCall
  ]
})
export class UserModule { }
