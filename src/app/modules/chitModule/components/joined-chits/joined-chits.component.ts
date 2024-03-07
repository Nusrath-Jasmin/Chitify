import { Component, OnInit } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joined-chits',
  templateUrl: './joined-chits.component.html',
  styleUrls: ['./joined-chits.component.css']
})
export class JoinedChitsComponent implements OnInit {

  list!:any
  constructor(private apiservice:apiCall,private dataService:DataService,private router: Router){}
  ngOnInit(): void {
    this.apiservice.JoinedChits().subscribe({
      next:res=>{
        this.list=res
        console.log(this.list);
        
      }
    })
  }
   
  setChitId(chitId:string,monthlyPayment:number){
    this.dataService.setData3({chitId,amount:monthlyPayment})
    // this.router.navigate(['/user/home/joined-chits/payment-details']);
  }
 
}
