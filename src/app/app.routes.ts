import {
  PageNotFoundComponent
} from '@app/containers/page-not-found/page-not-found.component';
import { MainComponent } from '@app/containers/main/main.component';
import { LoginComponent } from '@app/containers/login/login.component';

export const APP_ROUTES = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
