import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-mayor-registration',
  templateUrl: './mayor-registration.component.html',
  styleUrls: ['./mayor-registration.component.scss']
})
export class MayorRegistrationComponent implements OnInit {

  constructor(  public modal: ModalFunctions) { }
  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  tempsus: Subscription;
  editableprofile;
  profilesubmit: boolean = false;
  public showsubmit: boolean = false;
  ngOnInit() {
  }

}
