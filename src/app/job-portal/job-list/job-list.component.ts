import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";
import { GetOperationService } from '../services/getOperation.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  constructor(public getservice:GetOperationService) { }
  public jobs;
  search="";
  joblist;
  itemPerPage=5;
  currentpage=1;
  totaljobs=0;
  totalpages=0;
  ngOnInit() {

    this.getservice.getJobs(this.itemPerPage,this.currentpage)
    .subscribe(result=>{
      console.log(result);
      this.jobs=result.result.fetchjobs;
      this.totaljobs=result.result.totaljobs;
      this.joblist=this.jobs;
      this.totalpages=Math.ceil(this.totaljobs/this.itemPerPage);
    })

    Feather.replace()

    let filter = document.querySelector('.filter-btn a');
    let filterBox = document.querySelector('.job-filter-wrapper');

    $(filter).on("click",function(){
         $(filterBox).toggleClass("slide-in");
    });


  /*----------------------------------------------
    Category Filter
    -----------------------------------------------*/
    $('.job-filter .option-title, .candidate-filter .option-title, .employer-filter .option-title').on('click', function (event) {
      var clickover = $(event.target);
      $(this).each(function() {
        $(this).toggleClass('compress');
        $(this).siblings('ul, .price-range-slider').slideToggle();
      })
    });

    $('.job-filter a, .candidate-filter a, .employer-filter a').on('click', function(e) {
      e.preventDefault();
      var cls = $(this).parents(".job-filter, .candidate-filter, .employer-filter").data("id");
      var innerContent = '<a href="#">' + $(this).data("attr") + '</a><span class="ti-close"></span>';
      var filteredList = '<li class="' + cls + '">' + innerContent + '</li>';

      $('.selected-options .filtered-options li.' + cls).remove();
      $('.selected-options .filtered-options').append(filteredList);
    });

    $(document).on('click', ".selected-options .filtered-options li span", function() {
      $(this).parent('li').remove();
    });

    $(document).on('click', ".selected-options .selection-title a", function(e) {
      e.preventDefault();
      $('.selected-options .filtered-options li').remove();
      $('.selected-options').slideUp();
    });

    $(document).on('click', ".job-filter li a, .candidate-filter li a, .employer-filter li a", function() {
      $('.selected-options').slideDown();
    });

    if($('.selected-options .filtered-options li').lenght > 0) {
      $('.selected-options').slideDown();
    }

    /*----------------------------------------
      Price Range
    ----------------------------------------*/

    function priceRange() {
      $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function (cause, leftValue, rightValue) {
          $(this).parent().find('.leftLabel').text(leftValue);
          $(this).parent().find('.rightLabel').text(rightValue);
        }
      });
    }

    priceRange();

    /*-------------------------------------------
      Listing Sidebar Switch
    -------------------------------------------*/

    var listingContainer = '.listing-with-map .job-listing-container';
    var windowWidth = $(window).innerWidth();

     if(windowWidth > 1199) {
       $(listingContainer).css({
         'width': 1040,
       });

       $('.sidebar-controller .sidebar-switch').on('click', function() {
         if($(this).hasClass('on')) {
           $('.slim-footer').css('width', 760);
           console.log(windowWidth);
         } else {
           $('.slim-footer').css('width', 1040);
           console.log(windowWidth);
         }
       })

     } else {
       $(listingContainer).css({
         'width': windowWidth,
       });
     }

     $(document).on('click','.sidebar-switch', function() {
       $(this).toggleClass('on');
       if($(this).hasClass('on')){
         console.log('on');

         $('.sidebar-controller label span').text('Hide');

         $('.job-filter-wrapper').css({
           'display': 'block',
           'margin-left': 0,
           'width': '280px'
         });

         $('.filtered-job-listing-wrapper').css({
           'width': '760px'
         });

         $('.job-listing-container').css({
           'width': '1040px'
         });

         var listingContainerWidth = $('.listing-with-map .job-listing-container').innerWidth();
         var mapWidth = windowWidth - listingContainerWidth;

         $('.listing-side-map').width(mapWidth);

       } else {
         console.log('not on');
         $('.sidebar-controller label span').text('Show');

         $('.job-filter-wrapper').css({
           'display': 'none',
           'margin-left': '-280px',
           'width': '0'
         });

         $('.filtered-job-listing-wrapper').css({
           'width': '100%'
         });

         $('.filtered-job-listing-wrapper').addClass('change-padding');

         $('.job-listing-container').css({
           'width': '760px'
         })

         var listingContainerWidth = $('.listing-with-map .job-listing-container').innerWidth();
         var mapWidth = windowWidth - listingContainerWidth;
         $('.listing-side-map').width(mapWidth);

       }
    });

  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.jobs=this.joblist.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.jobs=this.joblist;
   }
  }

  pageChanged(event){
      console.log('event hittttttt', event);
      this.currentpage=event;
      this.getservice.getJobs(this.itemPerPage,this.currentpage)
      .subscribe(result=>{
        console.log(result);
        this.jobs=result.result.fetchjobs;
        this.totaljobs=result.result.totaljobs;
        this.joblist=this.jobs;
      })
  }

}
