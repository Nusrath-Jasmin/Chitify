import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AdminApiService } from '../../services/adminApi.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{

  constructor(private dataService:DataService, private apiService:AdminApiService){}
  requests!:any
  seeMoreClicked=false
  buttonText='See More'
  res:any
  isLoading=false

  ngOnInit(): void {
    this.dataService.RequestArray$.subscribe(data=>this.requests=data)
  }

  seeMore(id:string){
    console.log(id);
    
    if(!this.seeMoreClicked)
    {
      this.seeMoreClicked=true
      this.buttonText='See Less'
    }
    else
    {
      this.seeMoreClicked=false
      this.buttonText='See More'
    }

    if(this.seeMoreClicked){
      const data={userid:id}
    this.apiService.getUserDetails(data).subscribe({
      next:(res)=>{
        console.log(res)
        this.res=res
      },
      error:(err)=>{

      }
    })
  }
  }

  acceptRequest(id:string){
    this.isLoading=true
    const data={requestid:id}
    this.apiService.AddAsOwner(data).subscribe({
      next:(res)=>{
        this.isLoading=false
        console.log(res)
        this.refreshComponentData()
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  reject(id:string){
    this.isLoading=true
    const data={requestid:id}
    this.apiService.RejectRequest(data).subscribe({
      next:(res)=>{
        this.isLoading=false
        console.log(res)
        this.refreshComponentData()
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  refreshComponentData(){
    this.apiService.getRequest().subscribe(data=>this.requests=data)
    console.log(this.requests);
    
  }

}
