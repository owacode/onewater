import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdderOperationService } from '../../services/adderOperation.service';
import { GetOperationService } from 'src/app/job-portal/services/getOperation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  form:FormGroup;
  constructor(public service: AdderOperationService, public getservice: GetOperationService, public router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(result=>{
      //console.log(result)
      let id=result.id
      this.getservice.getSingleJob(result.id)
      .subscribe(result=>{
        const data=result.result
        //console.log(result)

        this.form= new FormGroup({
          title:new FormControl(data.title,{validators:[Validators.required,Validators.email]}),
          category:new FormControl(data.category[0],{validators:[Validators.required]}),
          location:new FormControl(data.location,{validators:[Validators.required]}),
          profile_description:new FormControl(data.profile_description),
          salary:new FormControl(data.salary,{validators:[Validators.required]}),
          experience:new FormControl(data.experience,{validators:[Validators.required]}),
          gender:new FormControl(data.gender,{validators:[Validators.required]}),
          deadline:new FormControl(data.deadline,{validators:[Validators.required]}),
          type:new FormControl(data.job_type,{validators:[Validators.required]}),
          responsiblity:new FormControl(data.responsiblity,{validators:[Validators.required]}),
          education:new FormControl(data.education,{validators:[Validators.required]}),
          qualification:new FormControl(data.qualification,{validators:[Validators.required]}),
          jobid:new FormControl(id)
        });
      })
    })
  }


  editjob(){
    //console.log(this.form.value);
    this.service.updateJob(this.form.value);
  }


}
