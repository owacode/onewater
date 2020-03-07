import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cm-dashboard',
  templateUrl: './cm-dashboard.component.html',
  styleUrls: ['./cm-dashboard.component.scss']
})
export class CmDashboardComponent implements OnInit {
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

    // this.common.getAllVideos()
    // .subscribe(result=>{
    //   this.totalvideos=result.result.length;
    // })
  }

}
