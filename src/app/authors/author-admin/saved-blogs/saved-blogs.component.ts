import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorAuthService } from '../../services/author-auth.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-saved-blogs',
  templateUrl: './saved-blogs.component.html',
  styleUrls: ['./saved-blogs.component.scss']
})
export class SavedBlogsComponent implements OnInit {

  savedblogs;
  constructor(public route:ActivatedRoute, public commonservice: CommonService, public authservice: AuthorAuthService) { }

  ngOnInit() {
      this.commonservice.getSavedBlog(this.authservice.authorapprovedid)
      .subscribe(result=>{
        console.log(result)
        this.savedblogs=result.result;
        console.log(this.savedblogs);
      })
  }

}
