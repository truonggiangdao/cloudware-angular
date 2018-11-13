import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/services/http.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AppConfig } from '@app/common/classes/AppConfig';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import deviceHelper from '@app/common/utils/deviceHelper';
import { TokenService } from '@app/services/token.service';
import { LoginService } from '@app/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appConfigLoaded = false;
  currentPage = '';

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfig,
    private viewport: ViewportDetails,
    private router: Router,
    private tokenService: TokenService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.registerNavEventListener();
    this.setDeviceClassToBody();
    this.calcViewportDimension();
    this.httpService.getConfig()
    .subscribe(
    this.doAfterGetConfig
    );
  }

  runIntervalNetworkChecking = () => {
    setInterval(() => {
      this.loginService.loginCompanyCode('').subscribe();
    }, this.appConfig.REFRESH_DURATION);
  }

  onDimensionChanged = (type, data) => {
    switch (type) {
      case 'WIDTH':
        this.viewport.WIDTH = data;
        break;
      case 'HEIGHT':
        this.viewport.HEIGHT = data;
        break;
      default:
        break;
    }
  }

  registerNavEventListener = () => {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        const token = this.tokenService.getToken();
        if (token) {
          this.appConfig.AUTHENTICATED = true;
        } else {
          this.appConfig.AUTHENTICATED = false;
        }
        if (event.url === '/login' && token) {
          this.goToMain();
        }
        if (event.url !== '/login' && !token) {
          this.goToLogin();
        }
      }

      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.currentPage = 'login';
        } else if (event.url === '/' ) {
          this.currentPage = 'main';
        } else {
          this.currentPage = 'other';
        }
      }
    });
  }

  setDeviceClassToBody = () => {
    if (deviceHelper.isMobile()) {
      document.body.classList.add('device');
      if (deviceHelper.isPhone()) {
        document.body.classList.add('device-phone');
      }
      if (deviceHelper.isTablet()) {
        document.body.classList.add('device-tablet');
      }
    } else {
      document.body.classList.add('desktop');
    }
  }

  calcViewportDimension = () => {
    if (deviceHelper.isMobile()) {
      document.body.classList.add('device');
      if (deviceHelper.isPhone()) {
        document.body.classList.add('device-phone');
      }
      if (deviceHelper.isTablet()) {
        document.body.classList.add('device-tablet');
      }
    } else {
      document.body.classList.add('desktop');
    }
  }

  doAfterGetConfig = (data) => {
    (Object).assign(this.appConfig, data);
    this.appConfigLoaded = true;
    this.runIntervalNetworkChecking();
  }

  goToMain = () => {
    this.router.navigate(['/']);
  }

  goToLogin = () => {
    this.router.navigate(['/login']);
  }
}
