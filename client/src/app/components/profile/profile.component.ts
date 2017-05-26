import { Component, OnInit, OnDestroy, Inject  } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs/Subscription';

import * as moment from 'moment';

const DEFAULT_USER_PROFILE: User = Object.freeze({
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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

  email: String = '';
  username: String = '';

  userProfile: User = Object.assign({}, DEFAULT_USER_PROFILE);
  subscriptionUserProfile: Subscription;

  constructor( @Inject('authZero') private authZero, @Inject('auth') private auth) { }

  ngOnInit() {
    const profile = this.authZero.getProfile();
    if (profile) {
      this.email = profile.email;
      this.username = profile.nickname;
    } else { console.log('Failed to get profile!'); }
    // subscribe the user's profile
    this.searchUserProfileByEmail();
  }

  ngOnDestroy() {
    // unsubscribe when this component destroyed

    if (this.subscriptionUserProfile) {
      this.subscriptionUserProfile.unsubscribe();
    }
  }

  // get the user profile from mLab
  searchUserProfileByEmail(): void {
    this.subscriptionUserProfile = this.auth.getUserProfileByEmail(this.email)
      .subscribe(profile => {
        if (profile.childBirthday) {
        profile.childBirthday = moment(profile.childBirthday).format('YYYY-MM-DD');
        }
        if (profile.childGender === 'M') {
          profile.childGender = 'Boy';
        } else if (profile.childGender === 'F') {
          profile.childGender = 'Girl';
        }
        this.userProfile = profile;
      });
  }

  resetPassword() {
    this.authZero.resetPassword();
  }

}
