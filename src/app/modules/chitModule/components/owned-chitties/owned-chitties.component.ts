export interface Chit {
  _id: string;
  chitName: string;
  duration: number;
  totalAmount: number;
  monthlyPayment: number;
  participants: number;
  chitType: string;
  startDate: string; 
  requests?:any
}

import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owned-chitties',
  templateUrl: './owned-chitties.component.html',
  styleUrls: ['./owned-chitties.component.css']
})
export class OwnedChittiesComponent implements OnInit{

  constructor(private apiservice:apiCall , private fb: FormBuilder){}
  chitties:Chit[]=[]
  update=false
  chitToUpdate:Chit|null=null
  chittyForm!: FormGroup; 
  message:boolean=false
  noOfRequest=0
  requestClicked=false
  requests:any[]=[]
  
  ngOnInit(): void {
    this.refreshData()
  }

  updateChitty(chit:any){
    this.update=true
    this.chitToUpdate=chit

    this.chittyForm = this.fb.group({ 
      _id:[this.chitToUpdate?._id,Validators.required],
      chitName: [this.chitToUpdate?.chitName, Validators.required],
      duration: [this.chitToUpdate?.duration, Validators.required],
      totalAmount: [this.chitToUpdate?.totalAmount, Validators.required],
      monthlyPayment: [this.chitToUpdate?.monthlyPayment, Validators.required],
      participants: [this.chitToUpdate?.participants, Validators.required],
      chitType: [this.chitToUpdate?.chitType, Validators.required],
      startDate: [this.chitToUpdate?.startDate, Validators.required]
    });
  }

  buttonText="Update"
  onsubmit(){
    if (this.chittyForm.valid) {
      console.log(this.chittyForm.value);
      this.apiservice.UpdateChitty(this.chittyForm.value).subscribe({
        next:res=>{
          this.update=false
          this.refreshData()
        },
        error:err=>this.message=true
      })
    } else {
    this.message=true
    }
  }

  deleteChitty(id:string,startDate:string){
    const currentDate = new Date();
    if (currentDate >= new Date(startDate)) {
      this.message=true
    }
    else{
    this.apiservice.DeleteChitty(id).subscribe({
      next:res=>this.refreshData(),
      error:err=>this.message=true
    })
  } 
  }

  refreshData(){
    this.apiservice.OwnedChitties().subscribe({
      next:(chitties: Chit[]) => {
        chitties.forEach(chitty => {
          this.apiservice.getRequest(chitty._id).subscribe((request) => {
           chitty.requests=request
          });
        })
        this.chitties=chitties
        console.log(this.chitties);
        this.noOfRequest=this.chitties.length;
        }
      ,
      error:err=>{
        this.chitties=[]
      }
    })
}

clicked(requst:any[]){
  this.requestClicked=true
  this.requests = requst.map(user => ({ id: user }));
  this.requests.forEach(user=>{
    this.apiservice.getUser(user.id).subscribe(res=>{
      user.details=res
    })
  })
  console.log(this.requests);
}

accept(id:string){
  
}
reject(id:string){
  
}
}
