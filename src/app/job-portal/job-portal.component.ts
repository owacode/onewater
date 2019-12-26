import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { GetOperationService } from './services/getOperation.service';
import { AuthJobService } from './services/auth.service';

@Component({
  selector: 'app-job-portal',
  templateUrl: './job-portal.component.html',
  styleUrls: ['./job-portal.component.scss']
})
export class JobPortalComponent implements OnInit {

  constructor(public auth:AuthJobService) { }

  ngOnInit() {

    this.auth.checkLocalStorage();
        /*----------------------------------------------
        Job Filter Result View
        -----------------------------------------------*/

        $('.job-view-controller .controller, .candidate-view-controller .controller, .employer-view-controller .controller').on('click', function() {
          $('.job-view-controller .controller, .candidate-view-controller .controller, .employer-view-controller .controller').removeClass('active');
          $(this).addClass('active');
        })

        $('.job-view-controller .list, .candidate-view-controller .list, .employer-view-controller .list').on('click', function() {
          $('.job-filter-result, .candidate-filter-result, .employer-filter-result').removeClass('grid');
          $('.job-filter-result .job-list, .candidate-filter-result .candidate, .employer-filter-result .employer').removeClass('half-grid');
        })

        $('.job-view-controller .grid, .candidate-view-controller .grid, .employer-view-controller .grid').on('click', function() {
          $('.job-filter-result, .candidate-filter-result, .employer-filter-result').addClass('grid');
          $('.job-filter-result .job-list, .candidate-filter-result .candidate, .employer-filter-result .employer').addClass('half-grid');
        });


  }

}
