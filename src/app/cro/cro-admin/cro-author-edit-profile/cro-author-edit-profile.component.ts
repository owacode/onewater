import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-cro-author-edit-profile',
  templateUrl: './cro-author-edit-profile.component.html',
  styleUrls: ['./cro-author-edit-profile.component.scss']
})
export class CroAuthorEditProfileComponent implements OnInit {

  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
  }

}
