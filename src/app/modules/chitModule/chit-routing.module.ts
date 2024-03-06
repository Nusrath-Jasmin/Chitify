import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CofirmEmailComponent } from './components/cofirm-email/cofirm-email.component';
import { InitialComponent } from './components/initial/initial.component';
import { EmailOtpComponent } from './components/email-otp/email-otp.component';
import { BeAnOwnerComponent } from './components/be-an-owner/be-an-owner.component';
import { StartChittyComponent } from './components/start-chitty/start-chitty.component';
import { OwnedChittiesComponent } from './components/owned-chitties/owned-chitties.component';
import { OpenChittiesComponent } from './components/open-chitties/open-chitties.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { JoinedChitsComponent } from './components/joined-chits/joined-chits.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: InitialComponent },
      { path: 'confirm-email', component: CofirmEmailComponent },
      { path: 'beanowner',component:BeAnOwnerComponent},
      { path:'start-chitty',component:StartChittyComponent},
      { path:'owned-chitties',component:OwnedChittiesComponent},
      { path:'open-chitties',component:OpenChittiesComponent},
      { path:'list-users',component:ListUsersComponent},
      { path:'addusers', component:AddUsersComponent},
      { path:'update-profile',component:UpdateProfileComponent},
      { path:'joined-chits',component:JoinedChitsComponent}
    ],
  },
  { path: 'email-otp',component:EmailOtpComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
