import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-3',
  templateUrl: './registration-3.component.html',
  styleUrls: ['./registration-3.component.css']
})
export class Registration3Component implements OnInit {

  calendarOptions: any ={}
  calendarEvents: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calendarOptions = {
      header: {
        left: "prev",
        center: "title, today",
        right: "next"
      },
      defaultView: "agendaWeek",
      events: [],
      allDaySlot: false,
      slotDuration: '01:00:00',
      dayClick: this.clickDay.bind(this),
      eventClick: this.clickEvent.bind(this)
    }
  }

  clickDay(date, jsEvent, view): void {
    console.log(date.format());
    let start = date.format();
    let event: any = {
      title: "Scheduled",
      start: date.format()
    }
    this.calendarOptions.events.push(event);
    //this.calendarEvents.push("1");
    $("#freeTrailScheduler").fullCalendar('renderEvent', event, true);
  }

  clickEvent(calEvent, jsEvent, view): void {
    console.log("Event is clicked!");
  }

}
