import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../user/home/home.component';
import { CofirmEmailComponent } from '../user/cofirm-email/cofirm-email.component';
import { InitialComponent } from '../user/initial/initial.component';
import { EmailOtpComponent } from '../user/email-otp/email-otp.component';
import { BeAnOwnerComponent } from '../user/be-an-owner/be-an-owner.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: InitialComponent },
      { path: 'confirm-email', component: CofirmEmailComponent },
      { path: 'beanowner',component:BeAnOwnerComponent}
    ],
  },
  { path: 'email-otp',component:EmailOtpComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
