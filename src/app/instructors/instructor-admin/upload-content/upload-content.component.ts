import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InstructorService } from '../instructor.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.scss']
})
export class UploadContentComponent implements OnInit {

  constructor(public instructorservice: InstructorService, public http:HttpClient) { }
  course;
  submited:Boolean=false;

  ngOnInit() {
    this.course= new FormGroup({
      title:new FormControl(null,{validators:[Validators.required]}),
      content_link:new FormControl(null,{validators:[Validators.required]}),
      category:new FormControl(null,{validators:[Validators.required]}),
      id:new FormControl(null),
      email:new FormControl(null),
    });
  }

  addcourse(){
    this.submited=true;
    this.course.value.email=this.instructorservice.useremail;
    this.course.value.id= this.instructorservice.userid;
    console.log(this.course.value);
    if(this.course.invalid){
      console.log("Content posting unsucessful, fill the form correctly")
      return;
    }
    console.log('pass',this.course.value);
    this.http.post('http://localhost:3000/addcourse',this.course.value)
    .subscribe(result=>{
      console.log("Content Posted Successfully", result);
      $('#videoModal').css("display", "block");
        $('#videoModal').addClass("show");
        $('.overlay').css("display", "block");
    })
  }

  closeModal(thismodal) {
    console.log('hit close')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }

}
