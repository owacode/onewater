import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from '../../services/common.service';
import { CROAuthService } from '../../services/cro-auth.service';

@Component({
  selector: 'app-cro-author-edit-profile',
  templateUrl: './cro-author-edit-profile.component.html',
  styleUrls: ['./cro-author-edit-profile.component.scss']
})
export class CroAuthorEditProfileComponent implements OnInit {

  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  editableprofile;
  showsubmit;
  editimage: boolean = false;
  profilesubmit: boolean = false;
  constructor(public modal: ModalFunctions,public common: CommonService, public auth: CROAuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      cro_name: new FormControl(null, { validators: [Validators.required] }),
      cro_desc: new FormControl(null, { validators: [Validators.required] }),
      location: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null, { validators: [Validators.required] }),
      twitter: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required] })
    });
    this.common.getUser().subscribe(result => {
      console.log(result);
      this.editableprofile = result.result[0];
      console.log(this.editableprofile, "dwwd");
      this.form.patchValue({
        cro_name: this.editableprofile.name,
        location: this.editableprofile.location,
        image: this.editableprofile.image,
        cro_desc: this.editableprofile.bio,
        linkedin: this.editableprofile.linkedIn_id,
        twitter: this.editableprofile.twitter_id
      });
      this.imagePreview = this.form.value.image;
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
      this.editimage = true;
    };
    filereader.readAsDataURL(file);
  }
  submit() {
    console.log(this.form.value);
    this.profilesubmit = true;
    console.log(this.form);
    if (this.form.invalid) {
      this.modal.hideBtnLoader();
      return;
    }
    console.log(this.form.value);
    if (this.editimage) this.auth.croProfileUpdateWithImage(this.form.value);
    else this.auth.croUpdate(this.form.value);
    this.modal.hideBtnLoader();
    this.modal.openModal("#updateProfileModal");
  }
}
