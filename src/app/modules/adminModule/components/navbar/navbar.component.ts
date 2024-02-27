import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/userToken.service';
import { AdminApiService } from '../../services/adminApi.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public request = [];
  public noOfRequest!: number;

  constructor(
    private userToken: AuthService,
    private router: Router,
    private apiCall: AdminApiService,
    private dataService: DataService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiCall.getRequest().subscribe({
      next: (res) => {
        this.request = res;
        this.noOfRequest = this.request.length;
        this.dataService.setData1(this.request);
      },
      error: (err) => {this.request=[]},
    });
  }

  onclick() {
    this.router.navigate(['requests'],{ relativeTo: this.route })  
  }

  logout(): void {
    this.userToken.destroyToken();
    this.router.navigate(['/login']);
  }
}
