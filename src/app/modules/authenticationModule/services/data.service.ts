import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SignupdataService {

  private formDataSubject = new BehaviorSubject<any>(null);
  private phoneObject=new BehaviorSubject<any>(null)
  formData$ = this.formDataSubject.asObservable();
  phone$=this.phoneObject.asObservable()

  constructor() { }

  setFormData(formData: any) {
    this.formDataSubject.next(formData);
  }  

  setData(data: any) {
    this.phoneObject.next(data);
  }
}
