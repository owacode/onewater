import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-cm-pending-blogs',
  templateUrl: './cm-pending-blogs.component.html',
  styleUrls: ['./cm-pending-blogs.component.scss']
})
export class CmPendingBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
