import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-cro-pending-blogs',
  templateUrl: './cro-pending-blogs.component.html',
  styleUrls: ['./cro-pending-blogs.component.scss']
})
export class CroPendingBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
