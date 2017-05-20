import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject('authZero') private authZero) { }

  ngOnInit() {
  }

  login(): void {
    this.authZero.login();
  }

  authenticated(): boolean {
    return this.authZero.authenticated();
  }
}
