import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthorAuthService } from "../services/author-auth.service";
import { Subscription } from "rxjs";
import { CommonService } from "../services/common.service";
import { HttpClient } from "@angular/common/http";
import { ModalFunctions } from "../../shared-functions/modal-functions";
import * as Feather from 'feather-icons';

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
  tempsus: Subscription;
  editableprofile;
  profilesubmit: boolean = false;
  public showsubmit: boolean = false;


  ngOnInit() {
    // if (localStorage.getItem("form_filled_job") == "true") {
    //   this.http
    //     .get<{ status: string; msg: string; result: any }>(
    //       "http://18.223.24.178:8000/notauthor/" +
    //         localStorage.getItem("authorid")
    //     )
    //     .subscribe(result => {
    //       this.showsubmit = true;
    //       //console.log(result);
    //       this.editableprofile = result.result[0];
    //       //console.log(this.editableprofile, "dwwd");
    //       this.form.patchValue({
    //         author_name: this.editableprofile.name,
    //         location: this.editableprofile.location,
    //         author_image: this.editableprofile.image,
    //         linkedin: this.editableprofile.linkedIn_id,
    //         twitter: this.editableprofile.twitter_id,
    //       });
    //       this.imagePreview = this.editableprofile.image;
    //     });
    // }

    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      location: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
      confirmpassword: new FormControl(null, { validators: [Validators.required] }),
      author_image: new FormControl(null, {validators: [Validators.required]}),
      author_bio: new FormControl(null, {validators: [Validators.required]}),
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
    this.form.patchValue({ author_image: file });
    this.form.get("author_image").updateValueAndValidity();
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
    this.auth.authorRegistration(this.form.value).subscribe(result => {
      console.log(result);
      if(result.status == 'error'){
        //console.log("email already exist");
        this.modal.hideBtnLoader();
        this.modal.openModal('#mailexistModal');
        return;
      }
      console.log(result, "author details registered successfully");
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
