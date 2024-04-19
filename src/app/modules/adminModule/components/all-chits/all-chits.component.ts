import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/adminApi.service';

@Component({
  selector: 'app-all-chits',
  templateUrl: './all-chits.component.html',
  styleUrls: ['./all-chits.component.css']
})
export class AllChitsComponent implements OnInit{

  chits:any[]=[]
  constructor(private apiservice:AdminApiService){}
  ngOnInit(): void {
    this.apiservice.getChits().subscribe({
      next:res=>{
        this.chits=res
      },
      error:err=>{
        this.chits=[]
      }
    })
  }
}
