import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DataService } from './services/data.service';
import { AuthGuardService } from './services/auth-guard.service';

import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ProfileComponent,
    FavoriteComponent,
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    { provide: 'data',
      useClass: DataService },
    { provide: 'authGuard',
      useClass: AuthGuardService },
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
