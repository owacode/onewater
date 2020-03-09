import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CROAuthService } from '../../services/cro-auth.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cro-saved-blogs',
  templateUrl: './cro-saved-blogs.component.html',
  styleUrls: ['./cro-saved-blogs.component.scss']
})
export class CroSavedBlogsComponent implements OnInit {


  savedblogs;
  constructor(public route:ActivatedRoute, public commonservice: CommonService, public authservice: CROAuthService) { }

  ngOnInit() {
      this.commonservice.getSavedBlog()
      .subscribe(result=>{
        console.log(result)
        this.savedblogs=result.result;
        console.log(this.savedblogs);
      })
  }

}
