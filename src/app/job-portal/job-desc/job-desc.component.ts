import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { ActivatedRoute } from '@angular/router';
import { GetOperationService } from '../services/getOperation.service';
@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.scss']
})
export class JobDescComponent implements OnInit {

  job;
  constructor(public router:ActivatedRoute, public service: GetOperationService) { }

  ngOnInit() {
      Feather.replace();
      this.router.params.subscribe(result=>{
        //console.log(result.id);
        this.service.getSingleJob(result.id)
        .subscribe(result=>{
          //console.log(result);
          this.job=result.result
          //console.log(this.job.education);
        })
      })
  }

}
