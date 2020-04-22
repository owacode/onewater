import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { CROAuthService } from '../services/cro-auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-cro-registration',
  templateUrl: './cro-registration.component.html',
  styleUrls: ['./cro-registration.component.scss']
})
export class CroRegistrationComponent implements OnInit {

  constructor(public modal: ModalFunctions, public auth: CROAuthService, public common: CommonService) { }
  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  tempsus: Subscription;
  editableprofile;
  profilesubmit: boolean = false;
  public showsubmit: boolean = false;
  ngOnInit() {
    this.form = new FormGroup({
      location: new FormControl(null, { validators: [Validators.required] }),
      cro_image: new FormControl(null, {validators: [Validators.required]}),
      cro_bio: new FormControl(null, {validators: [Validators.required]}),
      mobile: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null),
      twitter: new FormControl(null)
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    //console.log(file);
    //console.log(file.type.includes('image'));
    if(!file.type.includes('image')) {
      return alert("Only image is supported");
    }
    this.form.patchValue({ cro_image: file });
    this.form.get("cro_image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }


  submit() {
    //console.log(this.form.value);
    this.profilesubmit = true;
    if (this.form.invalid) {
      this.modal.hideBtnLoader();
      return;
    }

    //console.log(this.form.value);
    this.auth.croRegistration(this.form.value).subscribe(result => {
      //console.log(result, "cro details registered successfully");
      this.modal.hideBtnLoader();
      this.form.reset();
      this.profilesubmit = false;
      this.imagePreview=null;
      this.modal.openModal("#registerModal");
    });
  }

  logout() {
    this.auth.logout();
  }
}
