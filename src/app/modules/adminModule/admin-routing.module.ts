import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllChitsComponent } from './components/all-chits/all-chits.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent, 
    children: [
      {path:"requests",component:RequestsComponent},
      {path:"all-users",component:AllUsersComponent},
      {path:"all-chits",component:AllChitsComponent}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
