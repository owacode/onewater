import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthorAuthService } from "../services/author-auth.service";
import { Subscription } from "rxjs";
import { CommonService } from "../services/common.service";
import { HttpClient } from "@angular/common/http";
import { ModalFunctions } from "../../shared-functions/modal-functions";

@Component({
  selector: "app-author-registration",
  templateUrl: "./author-registration.component.html",
  styleUrls: ["./author-registration.component.scss"]
})
export class AuthorRegistrationComponent implements OnInit {
  constructor(
    public auth: AuthorAuthService,
    public common: CommonService,
    public http: HttpClient,
    public modal: ModalFunctions
  ) {}
  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  area = [];
  temp = [];
  tempsus: Subscription;
  editableprofile;
  profilesubmit: boolean = false;
  public showsubmit: boolean = false;

  ngOnInit() {
    if (localStorage.getItem("form_filled_job") == "true") {
      this.http
        .get<{ status: string; msg: string; result: any }>(
          "https://onewateracademy-blogapi.herokuapp.com/notauthor/" +
            localStorage.getItem("authorid")
        )
        .subscribe(result => {
          this.showsubmit = true;
          console.log(result);
          this.editableprofile = result.result[0];
          console.log(this.editableprofile, "dwwd");
          this.form.patchValue({
            author_name: this.editableprofile.name,
            location: this.editableprofile.location,
            author_image: this.editableprofile.image,
            author_desc: this.editableprofile.about_author,
            interest: this.editableprofile.interest_category,
            linkedin: this.editableprofile.linkedIn_id,
            facebook: this.editableprofile.facebook_id,
            twitter: this.editableprofile.twitter_id,
            instagram: this.editableprofile.instagram_id
          });
          this.imagePreview = this.editableprofile.image;
        });
    }

    this.form = new FormGroup({
      author_name: new FormControl(null, { validators: [Validators.required] }),
      location: new FormControl(null, { validators: [Validators.required] }),
      author_image: new FormControl(null, {validators: [Validators.required]}),
      author_desc: new FormControl(null, { validators: [Validators.required] }),
      interest: new FormControl(null, { validators: [Validators.required] }),
      mobile: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null, { validators: [Validators.required] }),
      twitter: new FormControl(null, { validators: [Validators.required] })
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ author_image: file });
    this.form.get("author_image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }

  submit() {
    console.log(this.form.value);
    this.profilesubmit = true;
    if (this.form.invalid) {
      this.modal.hideBtnLoader();
      return;
    }

    console.log(this.form.value);
    this.area = this.form.value.interest.split("\n");
    this.form.value.interest = this.area;

    console.log(this.form.value, "sss");
    this.auth.authorRegistration(this.form.value).subscribe(result => {
      console.log(result, "author details registered successfully");
      this.modal.hideBtnLoader();
      this.modal.openModal("#registerModal");
    });
  }

  logout() {
    this.auth.logout();
  }
}
