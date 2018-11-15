/* import angular core/libraries */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { CookieService } from 'ngx-cookie-service';

/* Customizations */
import { AppConfig } from '@app/common/classes/AppConfig';
import { APP_ROUTES } from '@app/app.routes';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { httpInterceptorProviders } from '@app/services/api/interceptors/http.interceptor';
import { HomeStore } from './store/home.store';
import { ContentStore } from './store/content.store';
import { TokenService } from './services/token.service';
import { Cookie } from './services/storage/cookie';
import { HomeService } from './services/api/home/home.service';
import { AuthService } from './services/api/auth/auth.service';
import { ContentService } from './services/api/content/content.service';
import { ErrorService } from './services/common/error.service';
import { NetworkConnection } from './common/classes/NetworkConnection';
import { UserStore } from './store/user.store';

/* Containers */
import { AppComponent } from '@app/containers/app/app.component';
import { NotFoundComponent } from '@app/containers/not-found/not-found.component';
import { LoginComponent } from '@app/containers/auth/login/login.component';
import { HomeComponent } from '@app/containers/home/home.component';
import { MainComponent } from '@app/containers/main/main.component';
import { AuthComponent } from '@app/containers/auth/auth.component';
import { RegisterComponent } from '@app/containers/auth/register/register.component';
import { ForgotComponent } from '@app/containers/auth/forgot/forgot.component';
import { TopNavComponent } from '@app/containers/nav-bars/top-nav/top-nav.component';

/* Components */
import { ContainerComponent } from '@app/components/container/container.component';
import { LoadingIconComponent } from '@app/components/loading-icon/loading-icon.component';

/* Directives */
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    NotFoundComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ContainerComponent,
    LoadingIconComponent,
    TopNavComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      {
        enableTracing: false, // <-- debugging purposes
      },
    ),
    HttpClientModule,
    FormsModule,
    MomentModule,
  ],
  providers: [
    HomeStore,
    ContentStore,
    UserStore,
    AppConfig,
    ViewportDetails,
    CookieService,
    TokenService,
    Cookie,
    NetworkConnection,
    HomeService,
    AuthService,
    ContentService,
    ErrorService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
