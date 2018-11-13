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
import { httpInterceptorProviders } from '@app/services/requestHandlers/http.interceptor';

/* Containers */
import { AppComponent } from '@app/containers/app/app.component';
import { PageNotFoundComponent } from '@app/containers/page-not-found/page-not-found.component';
import { LoginComponent } from '@app/containers/login/login.component';
import { MainComponent } from '@app/containers/main/main.component';
import { TopBarComponent } from '@app/containers/top-bar/top-bar.component';
import { MapAreaStaticComponent } from '@app/containers/map-area-static/map-area-static.component';
import { MorePopupComponent } from '@app/containers/more-popup/more-popup.component';
import { MapImgComponent } from '@app/containers/map-img/map-img.component';

/* Components */
import { ContainerComponent } from '@app/components/container/container.component';
import { NavBarComponent } from '@app/components/nav-bar/nav-bar.component';
import { NavIconComponent } from '@app/components/nav-icon/nav-icon.component';
import { NavBtnComponent } from '@app/components/nav-btn/nav-btn.component';
import { DropdownComponent } from '@app/components/dropdown/dropdown.component';
import { WorkplaceDetailComponent } from '@app/components/workplace-detail/workplace-detail.component';
import { WorkplaceComponent } from '@app/components/workplace/workplace.component';
import { LoadingIconComponent } from './components/loading-icon/loading-icon.component';
import { MessageNetworkComponent } from './components/message-network/message-network.component';
import { NetworkConnection } from '@app/common/classes/NetworkConnection';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    ContainerComponent,
    NavBarComponent,
    NavIconComponent,
    TopBarComponent,
    DropdownComponent,
    NavBtnComponent,
    WorkplaceComponent,
    MapAreaStaticComponent,
    WorkplaceDetailComponent,
    MorePopupComponent,
    MapImgComponent,
    LoadingIconComponent,
    MessageNetworkComponent,
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
    NetworkConnection,
    ViewportDetails,
    CookieService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
