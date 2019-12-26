import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../Services/auth.service';
import {FormControl, FormGroup} from "@angular/forms"
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import imageUpload from 'quill-plugin-image-upload';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.scss']
})
export class PostBlogComponent implements OnInit {

  htmlStr;
  form:FormGroup;
  image:FormGroup;
  imagePreview;
  submited:boolean=false;
  constructor(public http:HttpClient, public common:CommonService) {     this.image= new FormGroup({
    image:new FormControl(null)
  }) }

  config = {
    // toolbar: [
    //   ['bold', 'underline','image']
    // ],
      imageUpload: {
      upload: file => {
        console.log(file)
        // return a Promise that resolves in a link to the uploaded image
        this.image.patchValue({image:file});
        this.image.get('image').updateValueAndValidity();
        console.log('form hit',this.image.value);
        const imageform = new FormData();
        imageform.append('image',this.image.value.image);
        return new Promise((resolve, reject) => {
          this.http.post<{imagepath:any}>('https://onewater-blog-api.herokuapp.com/addimage',imageform)
          .subscribe(result=>{
            console.log('result hit',result);
            resolve(result.imagepath)
          })
        });
      }
    },
  }

  ngOnInit() {
        // register quill-plugin-image-upload
Quill.register('modules/imageUpload', imageUpload);


    this.form= new FormGroup({
      title:new FormControl(null),
      image:new FormControl(null),
      data:new FormControl(null)
    })
  }

  onImagePick(event:Event){
    const file=( event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    const filereader= new FileReader();
    filereader.onload=()=>{
      this.imagePreview=filereader.result;
    }
    filereader.readAsDataURL(file);
  }

  submit(){
    console.log('hit')
    console.log(this.form.value);
    this.htmlStr=this.form.value.data;
    // console.log(this.htmlStr);
    this.common.addBlog(this.form.value);
  }

}
