import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from '../shared-functions/modal-functions';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
  }

}
