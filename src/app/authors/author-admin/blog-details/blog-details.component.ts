import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blog;
  constructor(public common: CommonService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=>{
      console.log(result);
      console.log(result.id);
        this.getblog(result.id);
    })
  }

  getblog(id){
    this.common.getSingleAllBlog(id)
    .subscribe(result=>{
      console.log(result);
      this.blog=result.result[0 ];
      console.log(this.blog)
    })
  }

}
