import { Component, OnInit, Inject } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string = '';
  name : string = '';
  role : string = '';
  email: string = '';
  username: string = "";

  constructor( @Inject("authGuard") private authGuard ) { }

  ngOnInit() {
    let profile: Profile = this.authGuard.getProfile();
    if(profile){
      this.id = profile.id;
      this.name = profile.name;
      this.role = profile.role;
      this.email = profile.email;
      this.username = profile.nickname;
    }
    else{console.log('Failed to get profile!')}
  }

  resetPassword() {
    this.authGuard.resetPassword();
  }

}
