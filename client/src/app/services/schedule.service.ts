import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScheduleService {

  scheduleSource = new BehaviorSubject<any[]>([]);
  constructor(private http: Http) { }
  getScheduleEvents(teacherEmail: string): Observable<any> {
    this.http.get(`api/v1/events/${teacherEmail}`).toPromise()
                        .then((res: Response) => {this.scheduleSource.next(res.json()); })
                        .catch();

    return this.scheduleSource.asObservable();
  }

  addScheduleEvent(event: Object): Promise<any> {
    const headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/events', event, headers).toPromise()
                        .then((res: Response) => {return res.json(); })
                        .catch();
  }

  deleteScheduleEvents(events: Object[]): void {}

}
