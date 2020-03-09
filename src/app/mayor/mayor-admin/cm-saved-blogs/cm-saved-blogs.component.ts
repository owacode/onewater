import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cm-saved-blogs',
  templateUrl: './cm-saved-blogs.component.html',
  styleUrls: ['./cm-saved-blogs.component.scss']
})
export class CmSavedBlogsComponent implements OnInit {
  savedblogs;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getSavedBlog()
    .subscribe(result=>{
      console.log(result)
      this.savedblogs=result.result;
      console.log(this.savedblogs);
    })
  }

}
