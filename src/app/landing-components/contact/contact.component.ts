import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public http:HttpClient) { }
  user;
  submitted:boolean=false;

  ngOnInit() {
    this.user= new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      subject:new FormControl(null,{validators:[Validators.required]}),
      message:new FormControl(null,{validators:[Validators.required]})
    });
  }

  contact() {
    this.submitted = true;
    console.log(this.user.value);
    if(this.user.invalid) {
      console.log("error in contact form filing");
      return;
    }
    this.http.post<{status: any, msg: any, result:any}>('https://onewater-auth.herokuapp.com/contact',this.user.value)
    .subscribe(result=> {
      console.log(result);
      alert(result.msg)
    })
  }

}
