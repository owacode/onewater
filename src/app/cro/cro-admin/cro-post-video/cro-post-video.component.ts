import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";

@Component({
  selector: 'app-cro-post-video',
  templateUrl: './cro-post-video.component.html',
  styleUrls: ['./cro-post-video.component.scss']
})
export class CroPostVideoComponent implements OnInit {

form;

  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null),
      link: new FormControl(null),
      name: new FormControl(null),
      email: new FormControl(null),
      desc: new FormControl(null)
    });
  }

}
