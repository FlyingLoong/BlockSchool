import { Inject, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-3',
  templateUrl: './registration-3.component.html',
  styleUrls: ['./registration-3.component.css']
})
export class Registration3Component implements OnInit {

  calendarOptions: any = {};
  calendarEvents: any[] = [];

  constructor(@Inject('schedule') private schedule, @Inject('signUp') private signUp, private _router: Router) { }

  ngOnInit() {
    this.signUp.setProcessStatus('step3');
  }

/*
  ngAfterViewInit() {
    this.calendarOptions = {
      header: {
        left: 'prev',
        center: 'title, today',
        right: 'next'
      },
      defaultView: 'agendaWeek',
      events: [],
      allDaySlot: false,
      slotDuration: '00:40:00',
      dayClick: this.clickDay.bind(this),
      eventClick: this.clickEvent.bind(this)
    };
  }

  clickDay(date, jsEvent, view): void {
    console.log(date.format());
    const start = date.format();
    const newEvent: any = {
      teacherEmail: '..',
      title: 'Scheduled',
      start: date.format()
    }
    this.calendarOptions.events.push(newEvent);
    // this.calendarEvents.push("1");
    $('#freeTrailScheduler').fullCalendar('renderEvent', newEvent, true);
    this.schedule.addScheduleEvent(newEvent)
                .then( event => {
                  this._router.navigate(['home']);
                })
                .catch(err => {
                  console.log('cant add the schedule!');
                });
  }

  clickEvent(calEvent, jsEvent, view): void {
    console.log('Event is clicked!');
  }

 */
}
