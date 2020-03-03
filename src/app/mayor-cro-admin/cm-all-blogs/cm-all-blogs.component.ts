import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-cm-all-blogs',
  templateUrl: './cm-all-blogs.component.html',
  styleUrls: ['./cm-all-blogs.component.scss']
})
export class CmAllBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
