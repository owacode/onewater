import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-cm-approved-blogs',
  templateUrl: './cm-approved-blogs.component.html',
  styleUrls: ['./cm-approved-blogs.component.scss']
})
export class CmApprovedBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
