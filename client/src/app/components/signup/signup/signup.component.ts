import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  step1 = true;
  step2 = false;
  step3 = false;

  subscriptionProcessStatus: Subscription;

  constructor(@Inject('signUp') private signUp) { }

  ngOnInit() {
    // subscribe the process status of completion of user's info
    this.getProcessStatus();
    console.log('subscriptionProcessStatus: subscribed');
  }

  ngOnDestroy() {
    // unsubscribe when this component destroyed
    if (this.subscriptionProcessStatus) {
      this.subscriptionProcessStatus.unsubscribe();
      console.log('subscriptionProcessStatus: unsubscribed');
    }
  }

  getProcessStatus(): void {
    this.subscriptionProcessStatus = this.signUp.getProcessStatus().subscribe(step => {
      if (step === 'step1') {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
      } else if (step === 'step2') {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
      } else {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
      }
    });
  }

}
