import { NotFoundComponent } from '@app/containers/not-found/not-found.component';
import { MainComponent } from '@app/containers/main/main.component';
import { AuthComponent } from '@app/containers/auth/auth.component';
import { AUTH_ROUTES } from '@app/containers/auth/auth.routes';
import { HomeComponent } from './containers/home/home.component';

export const APP_ROUTES = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: AUTH_ROUTES,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
