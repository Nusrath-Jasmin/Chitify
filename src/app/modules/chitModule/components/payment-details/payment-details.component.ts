import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { apiCall } from '../../services/chit.service';
import { WindowRefService } from 'src/app/services/window.ref.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit{

  constructor(private dataService:DataService ,private apiservice:apiCall, private winRef:WindowRefService){}
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


  createRazPayOredr(month:string){
    this.apiservice.createRazPayOrder({chitId:this.chitId,amount:this.amount*100,month}).subscribe({
      next:res=>{
        console.log(res);
        const order_id=res.orderId
        const month=res.month
        this.payWithRazor(order_id,month)
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  payWithRazor(val:any,month:any){
    const options:any={
      key:"rzp_test_FKrhS5O7g7WsJU",
      amount:this.amount*100,
      currency:"INR",
      name:"Chitify",
      description:"",
      image:'',
      order_id:val,
      modal:{
        escape:false
      },
      notes:{},
      theme:{
        color:'#0c238a'
      }
    }

    options.handler=(response:any,error:any)=>{
      options.response=response;
      console.log(response);  
      this.apiservice.onsuccessPayment({month,chitId:this.chitId,amount:this.amount*100}).subscribe()
    }
    options.modal.ondismiss=()=>{
      console.log("transaction cancelled")
    }
    const rzp=new this.winRef.nativeWindow.Razorpay(options)
    rzp.open()
  }
 
}
