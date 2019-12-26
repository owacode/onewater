import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pending-blogs',
  templateUrl: './pending-blogs.component.html',
  styleUrls: ['./pending-blogs.component.scss']
})
export class PendingBlogsComponent implements OnInit {
pendingblogs;
 search="";
blogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getPendingBlogs()
    .subscribe(result=>{
      console.log(result);
      this.pendingblogs=result.result;
      this.blogs=result.result;
    })
  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.pendingblogs=this.blogs.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.pendingblogs=this.blogs;
   }
  }
}
