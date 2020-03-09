import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { MayorAuthService } from '../../services/mayor-auth.service';

@Component({
  selector: 'app-cm-author-edit-profile',
  templateUrl: './cm-author-edit-profile.component.html',
  styleUrls: ['./cm-author-edit-profile.component.scss']
})
export class CmAuthorEditProfileComponent implements OnInit {

  constructor( public modal: ModalFunctions,public auth: MayorAuthService) { }

  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  editableprofile;
  showsubmit;
  editimage: boolean = false;
  profilesubmit: boolean = false;

  ngOnInit() {
    this.form = new FormGroup({
      mayor_name: new FormControl(null, { validators: [Validators.required] }),
      mayor_desc: new FormControl(null, { validators: [Validators.required] }),
      location: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null),
      twitter: new FormControl(null),
      image: new FormControl(null, { validators: [Validators.required] })
    });

    this.auth.getUser().subscribe(result => {
      console.log(result);
      this.editableprofile = result.result[0];
      console.log(this.editableprofile, "dwwd");
      this.form.patchValue({
        mayor_name: this.editableprofile.name,
        location: this.editableprofile.location,
        image: this.editableprofile.image,
        mayor_desc: this.editableprofile.bio,
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
    if (this.editimage) this.auth.mayorProfileUpdateWithImage(this.form.value);
    else this.auth.mayorUpdate(this.form.value);
    this.modal.hideBtnLoader();
    this.modal.openModal("#updateProfileModal");
  }

}
