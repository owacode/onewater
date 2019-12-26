import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-job-list',
  templateUrl: './candidate-job-list.component.html',
  styleUrls: ['./candidate-job-list.component.scss']
})
export class CandidateJobListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
