import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cro-pending-blogs',
  templateUrl: './cro-pending-blogs.component.html',
  styleUrls: ['./cro-pending-blogs.component.scss']
})
export class CroPendingBlogsComponent implements OnInit {
  pendingblogs;
  search="";
 blogs;
  constructor(public common: CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getPendingBlogs()
    .subscribe(result=>{
      //console.log(result);
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
