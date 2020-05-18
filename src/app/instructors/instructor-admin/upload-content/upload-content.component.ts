import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InstructorService } from '../instructor.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.scss']
})
export class UploadContentComponent implements OnInit {

  constructor(public instructorservice: InstructorService, public http:HttpClient, public modal: ModalFunctions) { }
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
    //console.log(this.course.value);
    if(this.course.invalid){
      //console.log("Content posting unsucessful, fill the form correctly");
      this.modal.hideBtnLoader();
      return;
    }
    //console.log('pass',this.course.value);
    this.http.post('http://18.223.24.178:7050/addcourse',this.course.value)
    .subscribe(result=>{
      //console.log("Content Posted Successfully", result);
      this.modal.hideBtnLoader();
      this.course.reset();
      this.submited = false;
      this.modal.openModal('#videoModal');
    })
  }

  closeModal(thismodal) {
    //console.log('hit close')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }

}
