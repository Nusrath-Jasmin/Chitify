import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private Request = new BehaviorSubject<any>(null);
  RequestArray$ = this.Request.asObservable();

  constructor() { }

  setData1(request: any) {
    this.Request.next(request);
  }  


}