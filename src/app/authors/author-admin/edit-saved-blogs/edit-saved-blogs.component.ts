import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../services/common.service";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";

@Component({
  selector: 'app-edit-saved-blogs',
  templateUrl: './edit-saved-blogs.component.html',
  styleUrls: ['./edit-saved-blogs.component.scss']
})
export class EditSavedBlogsComponent implements OnInit {

  htmlStr;
  form: FormGroup;
  image: FormGroup;
  imagePreview;
  submited: boolean = false;
  constructor(
  ) {
    this.image = new FormGroup({
      image: new FormControl(null)
    });
  }

  ngOnInit() {
   
  }

}
