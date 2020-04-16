import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from '../shared-functions/modal-functions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
  }

}
