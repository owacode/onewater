import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-approved-blogs',
  templateUrl: './approved-blogs.component.html',
  styleUrls: ['./approved-blogs.component.scss']
})
export class ApprovedBlogsComponent implements OnInit {
  approvedblogs;
  search="";
  blogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getApprovedBlogs()
    .subscribe(result=>{
      console.log(result);
      this.approvedblogs=result.result;
      this.blogs=result.result
    })
  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.approvedblogs=this.blogs.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.approvedblogs=this.blogs;
   }
  }
  }


