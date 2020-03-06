import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cro-edit-saved-blog',
  templateUrl: './cro-edit-saved-blog.component.html',
  styleUrls: ['./cro-edit-saved-blog.component.scss']
})
export class CroEditSavedBlogComponent implements OnInit {

  htmlStr;
  form: FormGroup;
  image: FormGroup;
  imagePreview;
  submited: boolean = false;
  editimage: boolean = false;
  constructor(
    public http: HttpClient,
    public modal: ModalFunctions,
    public route: ActivatedRoute
   ){
      this.image = new FormGroup({
        image: new FormControl(null)
      });
  }

  ngOnInit() {
    Quill.register("modules/imageUpload", imageUpload);

    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      image: new FormControl(null),
      data: new FormControl(null)
    });
  }


}
