import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/modules/adminModule/components/home/home.component';
import { AdminRoutingModule } from 'src/app/modules/adminModule/admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminApiService } from './services/adminApi.service';
import { RequestsComponent } from './components/requests/requests.component';
import { DataService } from './services/data.service';
import { AllChitsComponent } from './components/all-chits/all-chits.component';
import { AllUsersComponent } from './components/all-users/all-users.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    RequestsComponent,
    AllChitsComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[
    AdminApiService,
    DataService
  ]
})
export class AdminModule { }
