import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { apiCall } from '../../services/chit.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit{

  constructor(private dataService:DataService ,private apiservice:apiCall){}
  chitId:any
  amount!:number
  monthlyStatus:any[]=[]
  ngOnInit(): void {
    this.dataService.chitIdToFetchPayment$.subscribe(data=>{
      this.chitId=data.chitId
      this.amount=data.amount
      console.log("amount",this.amount);
      
    })
    this.apiservice.getMonthlyStatus(this.chitId).subscribe({
      next:res=>this.monthlyStatus=res,
      error:err=>this.monthlyStatus=[]
    })
  }
 
}
