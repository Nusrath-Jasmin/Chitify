import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlySchedulerService {

  constructor() { }

  scheduleMonthlyEvent(dayOfMonth: number, callback: () => void, hour:number= 15, minute:number= 5) {
    const now = new Date();
    const targetDate = new Date(now);

    if (now.getDate() > dayOfMonth) {
      targetDate.setMonth(targetDate.getMonth() + 1);
    }

    targetDate.setDate(dayOfMonth);
    targetDate.setHours(hour, minute, 0, 0);

    const delay = targetDate.getTime() - now.getTime();

    setTimeout(callback, delay);
  }
}
