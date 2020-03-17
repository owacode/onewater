import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../services/common.service";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";
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
  constructor(
    public http: HttpClient,
    public common: CommonService,
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


