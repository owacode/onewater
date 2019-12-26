import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './candidate-edit-profile.component.html',
  styleUrls: ['./candidate-edit-profile.component.scss']
})
export class CandidateEditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
