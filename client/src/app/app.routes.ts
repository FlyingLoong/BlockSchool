import { SignupComponent } from './components/signup/signup/signup.component';
import { Registration1Component } from './components/signup/registration-1/registration-1.component';
import { Registration2Component } from './components/signup/registration-2/registration-2.component';
import { Registration3Component } from './components/signup/registration-3/registration-3.component';
import { Registration4Component } from './components/signup/registration-4/registration-4.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const SIGN_UP_ROUTES: Routes = [
  {
    path: 'registration-1',
    component: Registration1Component
  },
  {
    path: 'registration-2',
    component: Registration2Component
  },
  {
    path: 'registration-3',
    component: Registration3Component
  },
  {
    path: 'registration-4',
    component: Registration4Component
  },
  {
    path: '**',
    redirectTo: 'registration-1'
  }
]

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signUp',
    component: SignupComponent,
    children: SIGN_UP_ROUTES
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const routes = RouterModule.forRoot(APP_ROUTES);
