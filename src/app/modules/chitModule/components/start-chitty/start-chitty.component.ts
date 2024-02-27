import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-start-chitty',
  templateUrl: './start-chitty.component.html',
  styleUrls: ['./start-chitty.component.css']
})
export class StartChittyComponent {
  buttonText="Submit"
  buttonClass = ""; // Add a variable to hold the button's class
  constructor(private apiService:apiCall){}

  onsubmit(form:NgForm){
    this.apiService.RegisterChit(form.value).subscribe({
      next:(res)=>{
        if(res.submitted){
          this.buttonText="Submitted"
          this.buttonClass = "bg-green-500"
        }
        else{
          this.buttonText="Submission Failed"
          this.buttonClass = "bg-red-500"
        }
      },
      error:(err)=>{
        this.buttonText="Submission Failed"
        this.buttonClass = "bg-red-500"
      }
    })
  }

}
