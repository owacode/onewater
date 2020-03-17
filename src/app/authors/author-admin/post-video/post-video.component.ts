import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from "../../services/common.service";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";

@Component({
  selector: "app-post-video",
  templateUrl: "./post-video.component.html",
  styleUrls: ["./post-video.component.scss"]
})
export class PostVideoComponent implements OnInit {
  form: FormGroup;
  submited: Boolean = false;
  constructor(public common: CommonService, public modal: ModalFunctions) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]}),
      link: new FormControl(null, {validators: [Validators.required]}),
      name: new FormControl(null),
      email: new FormControl(null),
      desc: new FormControl(null, {validators: [Validators.required]})
    });
  }

  postvideo() {
    this.submited = true;
    if (this.form.invalid) {
      console.log("Invalid Form for video posting by author");
      return;
    }
    this.form.value.email = localStorage.getItem("authoremail");
    this.form.value.name = localStorage.getItem("name");
    console.log(this.form.value);
    this.common.addVideo(this.form.value);
    this.modal.hideBtnLoader();
    this.modal.openModal("#videoModal");
  }
}
