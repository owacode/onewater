import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-cm-approved-blogs',
  templateUrl: './cm-approved-blogs.component.html',
  styleUrls: ['./cm-approved-blogs.component.scss']
})
export class CmApprovedBlogsComponent implements OnInit {
  approvedblogs;
  search="";
  blogs;
  constructor(public common: CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getApprovedBlogs()
    .subscribe(result=>{
      console.log(result);
      this.approvedblogs=result.result;
      this.blogs=result.result
    })
  }

}
