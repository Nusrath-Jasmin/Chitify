import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/admin/home/home.component';
import { AdminRoutingModule } from 'src/app/routes/admin-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
