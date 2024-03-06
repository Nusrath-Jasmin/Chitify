import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { apiCall } from '../../services/chit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  FMbuilder!: FormGroup;
  formdata = new FormData();
  constructor(
    private apiservice:apiCall,
    private router :Router  
    ) {}
  ngOnInit(): void {
    this.FMbuilder = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      file: new FormControl(null),
    });
  }
  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.formdata.append('file', files[0]);
    }
  }
  onSubmit() {
    if (this.FMbuilder.valid) {
    const value = this.FMbuilder.value; 
     this.formdata.append('firstName', value.firstName);
     this.formdata.append('lastName', value.lastName);
     this.formdata.append('file', value.file);  

console.log(value);

     this.apiservice.updateProfile(this.formdata).subscribe()
    
  }
}
}