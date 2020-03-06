import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-cro-all-blogs',
  templateUrl: './cro-all-blogs.component.html',
  styleUrls: ['./cro-all-blogs.component.scss']
})
export class CroAllBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    Feather.replace();
  }

}
