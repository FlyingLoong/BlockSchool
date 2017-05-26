import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';

import { AuthService } from './services/auth.service';
import { AuthZeroService } from './services/auth-zero.service';
import { SignupService } from './services/signup.service';
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { Registration1Component } from './components/signup/registration-1/registration-1.component';
import { Registration2Component } from './components/signup/registration-2/registration-2.component';
import { Registration3Component } from './components/signup/registration-3/registration-3.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DateRangePickDirective } from './directives/date-range-pick.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CurriculumComponent,
    Registration1Component,
    Registration2Component,
    Registration3Component,
    SignupComponent,
    ProfileComponent,
    DateRangePickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    {
      provide: 'auth',
      useClass: AuthService
    },
    {
      provide: 'authZero',
      useClass: AuthZeroService },
    {
      provide: 'signUp',
      useClass: SignupService
    },
    { provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
