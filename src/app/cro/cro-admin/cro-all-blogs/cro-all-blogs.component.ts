import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cro-all-blogs',
  templateUrl: './cro-all-blogs.component.html',
  styleUrls: ['./cro-all-blogs.component.scss']
})
export class CroAllBlogsComponent implements OnInit {
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

  deleteApproveBlog(mainid,approve_id) {
    console.log(mainid,approve_id);
    this.common.deleteApproveBlog(mainid,approve_id)
    .subscribe(result=> {
      console.log('approve blog deleted successfully',result);
      alert("Blog deleted")
    })
  }

  deleteUnApproveBlog(mainid,unapprove_id) {
    console.log(mainid,unapprove_id);
    this.common.deleteUnApproveBlog(mainid,unapprove_id)
    .subscribe(result=> {
      console.log('unapprove blog deleted successfully',result);
      alert("Blog deleted")
    })
  }

}