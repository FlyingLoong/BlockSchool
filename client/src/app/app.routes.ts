import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';


const ROUTES = [
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
    path: '**',
    redirectTo: 'home'
  }
]

export const routes = RouterModule.forRoot(ROUTES);
