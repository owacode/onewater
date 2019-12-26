import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  author;
  authorblogs;
  constructor(public router: ActivatedRoute, public http:HttpClient) { }

  ngOnInit() {
    this.router.params.subscribe(result=> {
      console.log(result)
      this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor/'+result.id)
      .subscribe(result=>{
        console.log(result);
         this.author=result.result[0];
      })
      this.getblogs(result.id);
    })
  }

  getblogs(id){
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/authorapprovedblogs/'+id)
    .subscribe(result=>{
      console.log(result,'mohit ');
       this.authorblogs=result.result.reverse();
       this.authorblogs=this.authorblogs.slice(0, 3)
    })
  }

}
