import { User } from './../../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

const DEFAULT_USER: User = Object.freeze({
  id: '',
  email: '',
  phoneNumber: '',
  address: '',
  parentName: '',
  relationship: '',
  childName: '',
  childAge: '',
  childGender: '',
  childBirthday: null,
  childInterests: ''
});

@Component({
  selector: 'app-registration-1',
  templateUrl: './registration-1.component.html',
  styleUrls: ['./registration-1.component.css']
})
export class Registration1Component implements OnInit {

  userInfo: User = Object.assign({}, DEFAULT_USER) ;

  constructor(@Inject('auth') private auth, @Inject('authZero') private authZero, @Inject('signUp') private signUp, private _router: Router) { }

  ngOnInit() {
    // get the user email
    this.userInfo.email = this.authZero.getProfile().email;
    // update flow css
    this.signUp.setProcessStatus('step1');
  }

  nextStep(): void {
    console.log(this.userInfo.email);
    this.auth.user.email = this.userInfo.email;

    this.auth.user.phoneNumber = this.userInfo.phoneNumber;
    this.auth.user.address = this.userInfo.address;

    this.signUp.setProcessStatus('step2');

    this._router.navigate(['/signUp/registration-2']);
  }

}
