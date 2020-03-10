import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  upcoming_events;
  past_events;
  constructor(public http: HttpClient) { }

  ngOnInit() {

    this.http.get<{status: any, msg: any, result: any}>('https://onewater-auth.herokuapp.com/past-event')
    .subscribe(result=> {
      this.past_events = result.result;
    })

    this.http.get<{status: any, msg: any, result: any}>('https://onewater-auth.herokuapp.com/upcoming-event')
    .subscribe(result=> {
      this.upcoming_events = result.result;
    })

  }

}
