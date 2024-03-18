import { Component, OnInit, SimpleChanges } from '@angular/core';
import { apiCall } from '../../services/chit.service';
import { MonthlySchedulerService } from '../../services/monthlySchedule.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
})
export class InitialComponent  {
  
  list!:any
  currentDate: Date = new Date();
  currentDay: number = this.currentDate.getDate();
  currentMonth: number = this.currentDate.getMonth() + 1;
  monthlyStatus:any[]=[]
  private intervalId: any;

  constructor(private apiservice:apiCall,private schedulerService:MonthlySchedulerService){}

    ngOnInit(): void {
      this.fetchData()
      // this.intervalId = setInterval(() => {
      //   this.fetchData()
      //   console.log('Code executed at intervals');
      // }, 60000); 
  }
  

  
  fetchData(){
    this.apiservice.JoinedChits().subscribe({
      next: res => {
        this.list = res;
        console.log(this.list);
  
        this.list.forEach((item: any) => {
          if (item.lotDate === this.currentDay) {
            const targetDayOfMonth = item.lotDate;
            this.schedulerService.scheduleMonthlyEvent(targetDayOfMonth, () => {
              this.apiservice.getUSerWhoPaid(item._id).subscribe({
                next: res => this.monthlyStatus = res,
                error: err => this.monthlyStatus = []
              });
            });
          }
        });
        console.log(this.monthlyStatus);
      }
    });
  }



  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
