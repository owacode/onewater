import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-cro-registration',
  templateUrl: './cro-registration.component.html',
  styleUrls: ['./cro-registration.component.scss']
})
export class CroRegistrationComponent implements OnInit {

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
