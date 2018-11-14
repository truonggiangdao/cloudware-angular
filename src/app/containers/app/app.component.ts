import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/services/api/http.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AppConfig } from '@app/common/classes/AppConfig';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import deviceHelper from '@app/common/utils/deviceHelper';
import { TokenService } from '@app/services/token.service';

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
  ) { }

  ngOnInit() {
    this.registerNavEventListener();
    this.setDeviceClassToBody();
    this.httpService.getConfig()
    .subscribe(
    this.doAfterGetConfig
    );
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
        if (event.url === '/auth' && token) {
          this.goToMain();
        }
        if (event.url !== '/auth' && event.url !== '/' && !token) {
          this.goToLogin();
        }
      }

      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
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

  doAfterGetConfig = (data) => {
    (Object).assign(this.appConfig, data);
    this.appConfigLoaded = true;
  }

  goToMain = () => {
    this.router.navigate(['/main']);
  }

  goToLogin = () => {
    this.router.navigate(['/auth']);
  }
}
