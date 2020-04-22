import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetOperationService } from '../services/getOperation.service';

@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrls: ['./employer-details.component.scss']
})
export class EmployerDetailsComponent implements OnInit {

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
        items: 3,
      },
      1500: {
        items: 3,

      }
    }
  }
  company;
  companyjobs;
  constructor(public route:ActivatedRoute, public http:HttpClient, public getservice:GetOperationService) { }

  ngOnInit() {
    Feather.replace();
    this.route.params.subscribe(result=>{
      this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/singlecompany/'+result.id)
      .subscribe(result=>{
        //console.log(result);
        this.company=result.result;
    })
  })

  this.route.params.subscribe(result=>{
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/company_posted_jobs/'+result.id)
    .subscribe(result=>{
      //console.log(result);
      this.companyjobs=result.result;
  })
})
  }

}
