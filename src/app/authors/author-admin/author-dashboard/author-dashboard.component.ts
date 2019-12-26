import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.scss']
})
export class AuthorDashboardComponent implements OnInit {
 recentblogs;
 totalblogs;
approvedblogs;
totalvideos;
  constructor(public common: CommonService) { }

  ngOnInit() {
    Feather.replace();

    this.common.getAllBlogs()
    .subscribe(result=>{
      this.totalblogs=result.result.length;
      this.recentblogs=result.result.slice(-5).reverse();
    })

    this.common.getApprovedBlogs()
    .subscribe(result=>{
      this.approvedblogs=result.result.length;
    })

    this.common.getAllVideos()
    .subscribe(result=>{
      this.totalvideos=result.result.length;
    })
  }

}
