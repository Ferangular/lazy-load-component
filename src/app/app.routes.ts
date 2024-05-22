import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'defer-block',
    loadComponent: () =>
      import('./pages/defer-block/user-profile.component').then(
        (c) => c.UserProfileComponent,
      ),
  },
  {
    path: 'non-defer-block',
    loadComponent: () =>
      import('./pages/non-defer-block/user-profile.component').then(
        (c) => c.UserProfileComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
