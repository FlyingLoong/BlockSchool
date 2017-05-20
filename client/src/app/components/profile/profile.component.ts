import { Component, OnInit, Inject  } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: String = '';
  username: String = '';

  constructor( @Inject('authZero') private authZero) { }

  ngOnInit() {
    const profile = this.authZero.getProfile();
    if (profile) {
      this.email = profile.email;
      this.username = profile.nickname;
    } else {console.log('Failed to get profile!')}
  }

  resetPassword() {
    this.authZero.resetPassword();
  }

}
