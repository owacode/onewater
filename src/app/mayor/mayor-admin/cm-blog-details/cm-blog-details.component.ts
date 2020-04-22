import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cm-blog-details',
  templateUrl: './cm-blog-details.component.html',
  styleUrls: ['./cm-blog-details.component.scss']
})
export class CmBlogDetailsComponent implements OnInit {

  blog;
  constructor(public common: CommonService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=>{
      //console.log(result);
        this.getblog(result.id);
    })
  }

  getblog(id){
    this.common.getSingleAllBlog(id)
    .subscribe(result=>{
      //console.log(result);
      this.blog=result.result;
    })
  }

}
