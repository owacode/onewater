import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthorAuthService } from '../../services/author-auth.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-author-edit-profile',
  templateUrl: './author-edit-profile.component.html',
  styleUrls: ['./author-edit-profile.component.scss']
})
export class AuthorEditProfileComponent implements OnInit {

  constructor(public common:CommonService, public auth: AuthorAuthService, public modal: ModalFunctions) { }
  form:FormGroup;
  imagePreview;
  submited:boolean=false;
  area=[];
  temp=[];
  editableprofile;
  showsubmit;

  ngOnInit() {
    Feather.replace();

    this.form= new FormGroup({
      author_name:new FormControl(null,{validators:[Validators.required]}),
      location:new FormControl(null,{validators:[Validators.required]}),
      author_desc:new FormControl(null),
      
      linkedin:new FormControl(null,{validators:[Validators.required]}),
      twitter:new FormControl(null,{validators:[Validators.required]}),
      
    });
    this.common.getUser()
    .subscribe(result=> {
      console.log(result);
      this.editableprofile=result.result[0];
      console.log(this.editableprofile,'dwwd')
     this.form.patchValue({author_name:this.editableprofile.name,
      location:this.editableprofile.location,
      author_desc:this.editableprofile.bio,
        linkedin:this.editableprofile.linkedIn_id,
        twitter:this.editableprofile.twitter_id})
    })
  }

  onImagePick(event:Event){
    const file=( event.target as HTMLInputElement).files[0];
    this.form.patchValue({author_image:file});
    this.form.get('author_image').updateValueAndValidity();
    const filereader= new FileReader();
    filereader.onload=()=>{
      this.imagePreview=filereader.result;
    }
    filereader.readAsDataURL(file);
  }
  profilesubmit:boolean=false;
  submit(){
    console.log(this.form.value);
    this.profilesubmit=true;
    console.log(this.form);
     if(this.form.invalid)
      {
        this.modal.hideBtnLoader();
        return;
      }
    console.log(this.form.value);
    // this.area=this.form.value.interest.split(',');
    // this.form.value.interest=this.area;
     this.auth.authorUpdate(this.form.value);
     this.modal.hideBtnLoader();
     this.modal.openModal("#updateProfileModal");
  }

}
