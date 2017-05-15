import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  constructor(@Inject('signUp') private signUp) { }

  ngOnInit() {
    this.getProcessStatus();
  }

  getProcessStatus(): void {
    this.signUp.getProcessStatus().subscribe(step => {
      if (step == "step1") {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
      } else if (step == "step2") {
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
