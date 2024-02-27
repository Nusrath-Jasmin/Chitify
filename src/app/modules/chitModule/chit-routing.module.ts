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
      { path:'open-chitties',component:OpenChittiesComponent}
    ],
  },
  { path: 'email-otp',component:EmailOtpComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
