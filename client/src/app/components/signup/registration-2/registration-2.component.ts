import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../../models/user.model';

import * as moment from 'moment';


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
  selector: 'app-registration-2',
  templateUrl: './registration-2.component.html',
  styleUrls: ['./registration-2.component.css'],
})
export class Registration2Component implements OnInit, AfterViewInit {

  userInfo: User = Object.assign({}, DEFAULT_USER);

  // for date range picker
  birthday = moment().format('YYYY-MM-DD');

  // customize Date Range Picker with options
  pickerOptions: Object = {
    singleDatePicker: true,
    showDropdowns: true
  };

  constructor(@Inject('auth') private auth, @Inject('signUp') private signUp, private _router: Router) { }

  ngOnInit() {
    this.signUp.setProcessStatus('step2');
  }

  ngAfterViewInit() {
  }

  dateSelected(date: any) {
    this.birthday = date;
  }


  nextStep(): void {
    console.log('nextStep()');
    this.auth.user.parentName = this.userInfo.parentName;
    this.auth.user.relationship = this.userInfo.relationship;
    this.auth.user.childName = this.userInfo.childName;
    this.auth.user.childAge = +this.userInfo.childAge;
    this.auth.user.childGender = this.userInfo.childGender;
    this.auth.user.childBirthday = this.birthday;
    this.auth.user.childInterests = this.userInfo.childInterests;

    this.auth.updateUserProfile()
      .then((ok) => {
        console.log('The user profile has been updated');
        this._router.navigate(['/signUp/registration-3']);
      })
      .catch(error => console.log(error.body));

    // update flow css
    this.signUp.setProcessStatus('step3');
  }



}
