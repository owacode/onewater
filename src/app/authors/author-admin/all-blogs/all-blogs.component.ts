import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  allblogs;
  search="";
  blogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.allblogs=result.result;
      this.blogs=result.result;
    })
  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.allblogs=this.blogs.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.allblogs=this.blogs;
   }
  }

}
