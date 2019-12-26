import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdderOperationService } from '../../services/adderOperation.service';
import { GetOperationService } from '../../services/getOperation.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  constructor(public service: AdderOperationService, public getservice: GetOperationService) { }
  form:FormGroup;
  job;
  ngOnInit() {
    this.getservice.getSingleCompany()
    .subscribe(result=>{
      console.log(result);
      this.job=result.result
    })
    Feather.replace();

    this.form= new FormGroup({
      title:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      category:new FormControl('Select Category',{validators:[Validators.required]}),
      location:new FormControl(null,{validators:[Validators.required]}),
      profile_description:new FormControl(null),
      salary:new FormControl(null,{validators:[Validators.required]}),
      experience:new FormControl('Experience',{validators:[Validators.required]}),
      gender:new FormControl('Gender',{validators:[Validators.required]}),
      deadline:new FormControl(null,{validators:[Validators.required]}),
      type:new FormControl('Job Type',{validators:[Validators.required]}),
      responsiblity:new FormControl(null,{validators:[Validators.required]}),
      education:new FormControl(null,{validators:[Validators.required]}),
      qualification:new FormControl('Qualification',{validators:[Validators.required]}),
      companyid:new FormControl(null,{validators:[Validators.required]}),
      image:new FormControl(null),
    });
  }

  postjob(){
    this.form.value.companyid=localStorage.getItem('companyid');
    this.form.value.image=this.job.company_logo
    console.log(this.form.value);
    this.service.addNewJob(this.form.value);
  }

}
