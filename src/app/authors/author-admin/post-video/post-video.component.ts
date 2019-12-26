import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent implements OnInit {

  form:FormGroup;
  constructor(public common:CommonService) { }

  ngOnInit() {

    this.form= new FormGroup({
      title:new FormControl(null),
      link:new FormControl(null),
      name:new FormControl(null),
      email:new FormControl(null),
      desc:new FormControl(null)
    })
  }

  postvideo(){
    this.form.value.email=localStorage.getItem('authoremail')
    this.form.value.name=localStorage.getItem('name')
    console.log(this.form.value);
    this.common.addVideo(this.form.value);
  }

}
