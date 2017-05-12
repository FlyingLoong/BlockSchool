import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { CourseSearchComponent } from './components/course-search/course-search.component'
import { ProfileComponent } from "./components/profile/profile.component";
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: 'course',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: CourseSearchComponent,
    canActivate:[ AuthGuardService ]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate:[ AuthGuardService ]
  },
  {
    path:'favorite',
    component: FavoriteComponent,
    canActivate:[ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'course'
  }
];

export const routing = RouterModule.forRoot(routes);
