import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-cro-approved-blogs',
  templateUrl: './cro-approved-blogs.component.html',
  styleUrls: ['./cro-approved-blogs.component.scss']
})
export class CroApprovedBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
