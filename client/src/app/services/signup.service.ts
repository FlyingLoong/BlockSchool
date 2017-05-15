import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {

  private step = new BehaviorSubject<string>("step1");

  constructor() { }

  setProcessStatus(step: string): void {
    this.step.next(step);
  }

  getProcessStatus(): Observable<string> {
    return this.step.asObservable();
  }

}
