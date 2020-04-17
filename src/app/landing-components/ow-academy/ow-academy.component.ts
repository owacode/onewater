import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-ow-academy',
  templateUrl: './ow-academy.component.html',
  styleUrls: ['./ow-academy.component.scss']
})
export class OwAcademyComponent implements OnInit {
  toRender = 'signup';
  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
  }

}
