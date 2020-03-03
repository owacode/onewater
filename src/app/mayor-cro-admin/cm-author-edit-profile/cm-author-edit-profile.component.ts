import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-cm-author-edit-profile',
  templateUrl: './cm-author-edit-profile.component.html',
  styleUrls: ['./cm-author-edit-profile.component.scss']
})
export class CmAuthorEditProfileComponent implements OnInit {

  constructor( public modal: ModalFunctions) { }

  ngOnInit() {
  }

}
