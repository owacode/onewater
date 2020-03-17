import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";
import { HttpClient } from "@angular/common/http";
import { FormControl,Validators, FormGroup } from "@angular/forms";
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cm-post-blog',
  templateUrl: './cm-post-blog.component.html',
  styleUrls: ['./cm-post-blog.component.scss']
})
export class CmPostBlogComponent implements OnInit {

  htmlStr;
  form: FormGroup;
  image: FormGroup;
  imagePreview;
  submited: boolean = false;
  showBlog: boolean = false;

  constructor(
    public http: HttpClient,
    public common: CommonService,
    public modal: ModalFunctions
  ) {
    this.image = new FormGroup({
      image: new FormControl(null)
    });
  }

  config = {
    imageUpload: {
      upload: file => {
        console.log(file);
        // return a Promise that resolves in a link to the uploaded image
        this.image.patchValue({ image: file });
        this.image.get("image").updateValueAndValidity();
        console.log("form hit", this.image.value);
        const imageform = new FormData();
        imageform.append("image", this.image.value.image);
        return new Promise((resolve, reject) => {
          this.http
            .post<{ imagepath: any }>(
              "https://onewater-blogapi.herokuapp.com/addimage",
              imageform
            )
            .subscribe(result => {
              console.log("result hit", result);
              resolve(result.imagepath);
            });
        });
      }
    }
  }
  showAddMsg(){
    document.querySelector(".saved-text")["style"].display = "block";
    setTimeout(() => {
      document.querySelector('.saved-text')["style"].display = "none";
  },2000);
  }

  ngOnInit() {

    Quill.register("modules/imageUpload", imageUpload);

    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required] }),
      data: new FormControl(null, { validators: [Validators.required] })
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }

  savedblog() {
    console.log('save blog hit');
    this.submited = true;
    if (this.form.invalid) {
      console.log("invalid form for saved post blog");
      return;
    }

    console.log("hit");
    this.modal.showBtnLoader();
    console.log(this.form.value);
    this.htmlStr = this.form.value.data;
    this.common.addToSavedBlog(this.form.value).subscribe(result => {
      console.log(result);
      this.modal.hideBtnLoader();
      this.modal.openModal('#saveModal');
      //this.form.reset();
      //this.imagePreview = null;
      this.showBlog = true;
    });
  }

  submit() {
    this.submited = true;
    if (this.form.invalid) {
      console.log("invalid form for post blog");
      return;
    }
    this.modal.openModal("#blogModal");  
  }

  postBlog(){
    this.modal.closeModal("#blogModal");
    console.log(this.form.value);
    this.htmlStr = this.form.value.data;
    this.common.addBlog(this.form.value);
    this.modal.openModal("#successModal");
    this.form.reset();
    this.imagePreview = null;
    this.submited = false;
    this.showBlog = true;
  }
}


