import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'SchoolBlock';

  username = '';
  subscriptionUsername: Subscription;

  constructor(@Inject("authGuard") private authGuard) { }

  ngOnInit() {
    // this.getUsername();
  }

  login(): void {
    // this.auth.login();
  }

  logout(): void {
    // this.auth.logout();
  }

  getUsername(): void {
    // this.subscriptionUsername = this.auth.getUsername()
    // .subscribe(username => this.username = username);
  }

  authenticated(): boolean {
    return this.authGuard.authenticated();
  }

  isTeacher(): boolean {
    return this.authGuard.isTeacher();
  }

}
