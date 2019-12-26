import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { AuthJobService } from 'src/app/job-portal/services/auth.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {

  constructor(public auth:AuthJobService) { }

  ngOnInit() {
    this.auth.checkLocalStorage();
    Feather.replace();
  }

}
