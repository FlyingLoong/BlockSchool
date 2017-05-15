import { User } from './../../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

const DEFAULT_USER: User = Object.freeze({
  email: "",
  password: "",
  parentName: "",
  relationship: "",
  childName: "",
  childAge: 5,
  childGender: "",
  childBirthday: "",
  childInterest: ""
});

@Component({
  selector: 'app-registration-1',
  templateUrl: './registration-1.component.html',
  styleUrls: ['./registration-1.component.css']
})
export class Registration1Component implements OnInit {

  userInfo: User = Object.assign({}, DEFAULT_USER) ;

  constructor(@Inject('auth') private auth, @Inject('signUp') private signUp, private _router: Router) { }

  ngOnInit() {
    this.userInfo.email = this.auth.user.email;
    this.userInfo.password = this.auth.user.password;
  }

  nextStep() : void{
    console.log(this.userInfo.email);
    this.auth.user.email = this.userInfo.email;
    this.auth.user.password = this.userInfo.password;

    this.signUp.setProcessStatus("step2");

    this._router.navigate(['signUp/registration-2']);
  }

}
