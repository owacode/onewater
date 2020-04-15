import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../services/common.service";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import "quill/dist/quill.snow.css";
import { ActivatedRoute } from '@angular/router';

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
  editimage: boolean = false;
  tinymceInit;
  constructor(
    public http: HttpClient,
    public common: CommonService,
    public modal: ModalFunctions,
    public route: ActivatedRoute
   ){}


  ngOnInit() {
    this.tinymceInit = {
      selector: "textarea",
      height: 500,
      width: 1000,
      plugins : [
        "advlist autolink lists image charmap print preview hr anchor pagebreak tinymcespellchecker link",
        "searchreplace wordcount fullscreen",
        "insertdatetime media nonbreaking save "
      ],
      toolbar : 'formatselect | bold italic | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | image media pageembed template link anchor codesample |spellchecker language spellcheckdialog',
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
      id: new FormControl(null),
      title: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]}),
      data: new FormControl(null, {validators: [Validators.required]})
    });

    this.route.params.subscribe(result=> {
      this.common.getSingleSavedBlog(result.id)
      .subscribe(result=>{
        console.log(result,'f')
        this.form.patchValue({
          id: result.result._id,
          title: result.result.title,
          image: result.result.image,
          data: result.result.desc
        })
        this.htmlStr = result.result.desc
        this.imagePreview = result.result.image
      })
    })
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

  savedblog() {
    console.log('saved hit')
    this.submited = true;

    if (this.form.invalid) {
      console.log("invalid form for saved post blog");
      return;
    }

    console.log("hit");
    this.modal.showBtnLoader();
    console.log(this.form.value);
    this.htmlStr = this.form.value.data;
    if(this.editimage){
      this.common.updateToSavedBlogWithImage(this.form.value).subscribe(result => {
        console.log(result);
        //this.form.reset();
        this.modal.hideBtnLoader();
      this.modal.openModal('#saveModal');
       // this.submited = false;
      });
    }
    else {
      this.common.updateToSavedBlog(this.form.value).subscribe(result => {
        console.log(result);
        this.modal.hideBtnLoader();
      this.modal.openModal('#saveModal');
      //this.form.reset();
        //this.submited = false;
      });
    }
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
    console.log("hit");
    console.log(this.form.value);
    this.htmlStr = this.form.value.data;
    if(this.editimage) this.common.addSavedBlogWithImage(this.form.value);
    else this.common.addSavedBlog(this.form.value);
    this.modal.openModal("#successModal");
    this.form.reset();
    this.submited = false;
  }
}


