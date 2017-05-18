import { User } from './../../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

const DEFAULT_USER: User = Object.freeze({
  id: '',
  email: '',
  password: '',
  parentName: '',
  relationship: '',
  childName: '',
  childAge: 5,
  childGender: '',
  childBirthday: '',
  childInterest: ''
})

@Component({
  selector: 'app-registration-2',
  templateUrl: './registration-2.component.html',
  styleUrls: ['./registration-2.component.css']
})
export class Registration2Component implements OnInit {

  userInfo: User = Object.assign({}, DEFAULT_USER);

  constructor(@Inject('auth') private auth, @Inject('signUp') private signUp, private _router: Router) { }

  ngOnInit() {
    this.signUp.setProcessStatus('step2');
  }


  nextStep(): void {
    // console.log("user.email is " + this.auth.user.email);
    this.auth.user.parentName = this.userInfo.parentName;
    this.auth.user.relationship = this.userInfo.relationship;
    this.auth.user.childName = this.userInfo.childName;
    this.auth.user.childAge = this.userInfo.childAge;
    this.auth.user.childGender = this.userInfo.childGender;
    this.auth.user.childBirthday = this.userInfo.childBirthday;
    this.auth.user.childInterest = this.userInfo.childInterest;

    this.auth.addNewUser()
              .then ( count => {
                // console.log('count' + count); // Debug
                if(count === 0){
                  console.log("User added");
                }else if(count >= 1) {
                  console.log("The email has been registered!")
                }
                //this._router.navigate(['signUp/registration-3']);
                this._router.navigate(['signUp/registration-4']);
              })
              .catch ( error => console.log(error.body) );

    this.signUp.setProcessStatus('step3');
  }

}
