import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blog;
  author;
  authorblogs;
  url;

  carouselOptions = {
    margin: 10,
    nav: true,
    dots:false,

    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,
      }
    }
  }

  constructor(public router:ActivatedRoute, public http:HttpClient) { }

  ngOnInit() {
    $(function() {
      $( ".blog-options .like-btn a" ).click(function() {
        $( ".like-btn a, span" ).toggleClass( "press", 500 );
      });
    });

  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });


  this.router.params.subscribe(result=> {
    console.log(result)
    this.url=`https://onewater.herokuapp.com/blog/${result.id}`;
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/singleappblog/'+result.id)
    .subscribe(result=>{
      console.log(result);
       this.blog=result.result[0];
       this.getauthor(this.blog.author_id);
       this.getauthorblogs(this.blog.author_id);
    })
  })
}

getauthor(id){
  this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor/'+id)
  .subscribe(result=>{
    console.log(result, 'author');
    this.author=result.result[0]
  })
}

getauthorblogs(id){
  this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/authorapprovedblogs/'+id)
  .subscribe(result=>{
    console.log(result,'mohit ');
     this.authorblogs=result.result.reverse();
     this.authorblogs=this.authorblogs.slice(0, 5)
  })
}
}
