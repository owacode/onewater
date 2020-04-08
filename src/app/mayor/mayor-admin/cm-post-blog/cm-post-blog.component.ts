import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
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
  imagePreview;
  submited: boolean = false;
  showBlog: boolean = false;
  tinymceInit;

  constructor(
    public http: HttpClient,
    public common: CommonService,
    public modal: ModalFunctions
  ) {}

  showAddMsg(){
    document.querySelector(".saved-text")["style"].display = "block";
    setTimeout(() => {
      document.querySelector('.saved-text')["style"].display = "none";
  },2000);
  }

  ngOnInit() {
    this.tinymceInit = {
      height: 500,
      width: 1000,
      plugins : [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount fullscreen",
        "insertdatetime media nonbreaking save "
      ],
      toolbar : 'formatselect | bold italic | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat |image',
      browser_spellcheck : true,
      image_advtab : true,
      images_upload_handler: function (blobInfo, success, failure) {
        console.log(blobInfo.blob())
        var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'https://onewater-blogapi.herokuapp.com/addimage');
    xhr.onload = function() {
      var json;

      if (xhr.status != 200) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }
      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.imagepath != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }
      success(json.imagepath);
    };
    formData = new FormData();
    formData.append('image', blobInfo.blob());
    xhr.send(formData);
      }
    }
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


