import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { HttpClient } from '@angular/common/http';
import { GetOperationService } from '../services/getOperation.service';

@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.scss']
})
export class JobHomeComponent implements OnInit {

  //owl carousel settings

  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,

    stagePadding: 50,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 2,

      },
      1200: {
        items: 4,
      }
    }
  }

  jobs;
  companies;
  constructor(public http:HttpClient,public getservice:GetOperationService) { }

  ngOnInit() {
    Feather.replace();
    this.getservice.getJobs(5,1)
    .subscribe(result=> {
      //console.log(result);
      this.jobs=result.result.fetchjobs;
      // this.jobs=this.jobs.slice(0, 5)
      //console.log(this.jobs)
    })

    this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/getcompanies')
    .subscribe(result=> {
      //console.log(result);
      this.companies=result.result.reverse();
      // this.companies=this.companies.slice(0, 5)
      //console.log(this.companies)
    })
  }

}
