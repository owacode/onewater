import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";

@Component({
  selector: 'app-cm-post-video',
  templateUrl: './cm-post-video.component.html',
  styleUrls: ['./cm-post-video.component.scss']
})
export class CmPostVideoComponent implements OnInit {
  form: FormGroup;
  submited: Boolean = false;
  
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


