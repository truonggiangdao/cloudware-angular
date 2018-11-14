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
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { APP_ROUTES } from '@app/app.routes';
import { httpInterceptorProviders } from '@app/services/api/interceptors/http.interceptor';

/* Containers */
import { AppComponent } from '@app/containers/app/app.component';
import { PageNotFoundComponent } from '@app/containers/page-not-found/page-not-found.component';
import { LoginComponent } from '@app/containers/login/login.component';
import { MainComponent } from '@app/containers/main/main.component';

/* Components */
import { ContainerComponent } from '@app/components/container/container.component';
import { LoadingIconComponent } from '@app/components/loading-icon/loading-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    ContainerComponent,
    LoadingIconComponent,
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
    AppConfig,
    ViewportDetails,
    CookieService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
