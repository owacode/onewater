import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-author-videos',
  templateUrl: './author-videos.component.html',
  styleUrls: ['./author-videos.component.scss']
})
export class AuthorVideosComponent implements OnInit {
allvideos;
  constructor(public common:CommonService) { }

  ngOnInit() {
    this.common.getAllVideos()
    .subscribe(result=>{
      //console.log(result);
      this.allvideos=result.result
    })
  }

}
