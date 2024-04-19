import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private Request = new BehaviorSubject<any>(null);
  Requested$ = this.Request.asObservable();

  private chit= new BehaviorSubject<any>(null);
  chitId$ = this.chit.asObservable();

  private chitId= new BehaviorSubject<any>(null);
  chitIdToFetchPayment$ = this.chitId.asObservable();

  constructor() { }

  setData1(request: any) {
    this.Request.next(request);
  }  
  setData2(id: any) {
    this.chit.next(id);
  }
  
  setData3(id: any) {
    this.chitId.next(id);
  }

}
