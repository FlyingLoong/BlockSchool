import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = '';
  subscriptionUsername: Subscription;

  activeNavBarMyCourseButtonState = false;
  subscriptionChangeActiveState: Subscription;

  constructor(@Inject('authZero') private authZero, @Inject('auth') private auth) { }

  ngOnInit() {
    this.getUsername();
    this.subscribeChangeActiveState();
  }

  login(): void {
    this.authZero.login();
  }

  logout(): void {
    this.authZero.logout();
  }

  getUsername(): void {
    this.subscriptionUsername = this.authZero.getUsername()
      .subscribe(username => this.username = username);
  }

  authenticated(): boolean {
    return this.authZero.authenticated();
  }

  subscribeChangeActiveState(): void {
    this.subscriptionChangeActiveState = this.authZero.checkUserInfoComplete()
      .subscribe(result => this.activeNavBarMyCourseButtonState = result);
  }


}
