import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScheduleService {

  constructor(private http: Http) { }

  //getScheduleEvents(): Promise<> {}

  addScheduleEvent(event: Object): Promise<any> {
    let headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/event', event, headers).toPromise()
                        .then((res: Response) => {return res.json()})
                        .catch()
  }

  deleteScheduleEvents(events: Object[]): void {}

}
