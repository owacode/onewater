import { Component, OnInit } from "@angular/core";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { MayorAuthService } from '../services/mayor-auth.service';

@Component({
  selector: "app-mayor-registration",
  templateUrl: "./mayor-registration.component.html",
  styleUrls: ["./mayor-registration.component.scss"]
})
export class MayorRegistrationComponent implements OnInit {
  constructor(public modal: ModalFunctions, public auth: MayorAuthService) {}
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
      mayor_image: new FormControl(null, { validators: [Validators.required] }),
      mayor_bio: new FormControl(null, { validators: [Validators.required] }),
      mobile: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null),
      twitter: new FormControl(null)
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    //console.log(file);
    //console.log(file.type.includes("image"));
    if (!file.type.includes("image")) {
      return alert("Only image is supported");
    }
    this.form.patchValue({ mayor_image: file });
    this.form.get("mayor_image").updateValueAndValidity();
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
      //console.log('invalid',this.form)
      this.modal.hideBtnLoader();
      return;
    }

    //console.log(this.form.value);
    this.auth.mayorRegistration(this.form.value).subscribe(result => {
      //console.log(result, "mayor details registered successfully");
      this.modal.hideBtnLoader();
      this.form.reset();
      this.profilesubmit = false;
      this.imagePreview = null;
      this.modal.openModal("#registerModal");
    });
  }

  logout() {
    this.auth.logout();
  }
}
