import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-candidate-registeration',
  templateUrl: './candidate-registeration.component.html',
  styleUrls: ['./candidate-registeration.component.scss']
})
export class CandidateRegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }
}
