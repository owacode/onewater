import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cro-post-blog',
  templateUrl: './cro-post-blog.component.html',
  styleUrls: ['./cro-post-blog.component.scss']
})
export class CroPostBlogComponent implements OnInit {

  htmlStr;
  form: FormGroup;
  image: FormGroup;
  imagePreview;
  submited: boolean = false;


  constructor(
    public http: HttpClient,
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

  ngOnInit() {

    Quill.register("modules/imageUpload", imageUpload);

    this.form = new FormGroup({
      title: new FormControl(null),
      image: new FormControl(null),
      data: new FormControl(null)
    });
  }
}


