import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCall } from '../../services/chit.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-be-an-owner',
  templateUrl: './be-an-owner.component.html',
  styleUrls: ['./be-an-owner.component.css']
})
export class BeAnOwnerComponent implements OnInit{
  constructor(private apicall:apiCall,private dataService:DataService){}
  public submitted=false
  public owner!:boolean

  ngOnInit(): void {
    this.apicall.RequestSubmittedorNot().subscribe({
      next:(res)=>this.submitted=res.accepted,
      error:(err)=>console.log(err)
    });
    this.apicall.isOwner().subscribe({
      next:(res)=>{
        this.owner=res.owner
        console.log(res);
      },
      error:(err)=>console.log(err)
    })
  }

  submitForm(form:NgForm){
    this.owner=false
    this.submitted=true
    this.apicall.applyForOwnerPosition(form.value).subscribe({
      next:(response)=>{
        if(response.requestSaved){
          this.dataService.setData1(true)
        }else{
          this.dataService.setData1(false)
        }
      },
      error:(error)=>{
        this.dataService.setData1(false)
      }
    })
  }
}
