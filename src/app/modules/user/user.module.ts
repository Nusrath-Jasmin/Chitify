import { NgModule } from '@angular/core';
import { UserRoutingModule } from 'src/app/routes/user-routing.module';
import { HomeComponent } from 'src/app/user/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    UserRoutingModule
  ]
})
export class UserModule { }
