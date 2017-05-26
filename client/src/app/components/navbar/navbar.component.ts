import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  username = '';
  subscriptionUsername: Subscription;
  activeNavBarMyCourseButtonState = false;
  subscriptionChangeActiveState: Subscription;

  constructor(@Inject('authZero') private authZero, @Inject('auth') private auth) { }

  ngOnInit() {
    // subscribe the user's name and the result of checkout whether user's profile exists
    this.getUsername();
    this.subscribeChangeActiveState();
    console.log('authZero.authenticated(');
  }
  ngOnDestroy() {
    // unsubscribe when this component destroyed
    if (this.subscriptionUsername) {
      this.subscriptionUsername.unsubscribe();
    }

    if (this.subscriptionChangeActiveState) {
      this.subscriptionChangeActiveState.unsubscribe();
    }
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
