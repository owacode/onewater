import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { GetOperationService } from '../../services/getOperation.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobs;
  search="";
  joblist;
  constructor(public service:GetOperationService) { }

  ngOnInit() {
    Feather.replace();
    let id=localStorage.getItem('companyid')
    this.service.jobsByCompany(id)
    .subscribe(result=> {
      console.log(result)
      this.jobs=result.result
      for(let i=0;i<result.result.length;i++){
        var d1 = new Date();
        var d2 = new Date(result.result[i].deadline);
        if(d1<d2) {
          this.jobs[i].status='active'}
        else {
          this.jobs[i].status='closed'}
      }
      this.joblist= this.jobs;
      console.log(this.jobs)
    })
  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.jobs=this.joblist.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.jobs=this.joblist;
   }
  }
}
