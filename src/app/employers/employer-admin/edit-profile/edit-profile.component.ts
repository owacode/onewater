import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthJobService } from '../../services/auth.service';
import { GetOperationService } from 'src/app/job-portal/services/getOperation.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(public auth: AuthJobService, public getservice:GetOperationService) { }
  form:FormGroup;
  imagePreview;
  submited:boolean=false;
  area=[];
  temp=[];
  editableprofile

  ngOnInit() {
    Feather.replace();

    this.form= new FormGroup({
      company_name:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      company_address:new FormControl(null,{validators:[Validators.required]}),
      company_logo:new FormControl(null,{validators:[Validators.required]}),
      company_website:new FormControl(null),
      category:new FormControl(null,{validators:[Validators.required]}),
      mobile:new FormControl(null,{validators:[Validators.required]}),
      company_description:new FormControl(null,{validators:[Validators.required]}),
      date_establish:new FormControl(null,{validators:[Validators.required]}),
      working_area:new FormControl(null,{validators:[Validators.required]}),
      // social_accounts:new FormControl(null,{validators:[Validators.required]}),
      facebook:new FormControl(null,{validators:[Validators.required]}),
      linkedin:new FormControl(null,{validators:[Validators.required]}),
      twitter:new FormControl(null,{validators:[Validators.required]}),

    });

    this.getservice.getSingleCompany()
    .subscribe(result=>{
      console.log(result);
      this.editableprofile=result.result;
      console.log(this.editableprofile,'dwwd')
     this.form.patchValue({company_name:this.editableprofile.company_name,
      company_address:this.editableprofile.company_address,
      company_logo:this.editableprofile.company_logo,
      company_website:this.editableprofile.company_website,
      category:this.editableprofile.interest_category,
      mobile:this.editableprofile.mobile_no,
      company_description:this.editableprofile.company_description,
      date_establish:this.editableprofile.date_establish,
      working_area:this.editableprofile.working_area,
      facebook:this.editableprofile.instagram_id,
      linkedin:this.editableprofile.instagram_id,
      twitter:this.editableprofile.instagram_id,
    })
    })

  }


  onImagePick(event:Event){
    const file=( event.target as HTMLInputElement).files[0];
    this.form.patchValue({company_logo:file});
    this.form.get('company_logo').updateValueAndValidity();
    const filereader= new FileReader();
    filereader.onload=()=>{
      this.imagePreview=filereader.result;
    }
    filereader.readAsDataURL(file);
  }

  submit(){
    console.log(this.form.value);
    this.submited=true;
    // if(this.form.invalid)
    //   {
    //     return;
    //   }
    console.log(this.form.value);
    this.area=this.form.value.working_area.split('\n');
    this.form.value.working_area=this.area;
    console.log(this.form.value,'sss');
    this.auth.employeeCompanyRegistration(this.form.value);
  }
}
