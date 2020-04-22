import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { ActivatedRoute } from '@angular/router';
import { GetOperationService } from '../../services/getOperation.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  public job;
  constructor(public routes:ActivatedRoute, public getservice:GetOperationService) { }

  ngOnInit() {
    Feather.replace();
    this.routes.params.subscribe(result=>{
      //console.log(result)
      this.getservice.getSingleJob(result.id)
      .subscribe(result=>{
        //console.log(result);
        this.job=result.result;
      });
    })
  }

}
