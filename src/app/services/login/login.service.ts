import { Injectable } from '@angular/core';
import { HttpService } from '@app/services/http.service';
import { UrlService } from '@app/services/url.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { UserProfile } from '@app/common/classes/UserProfile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http: HttpClient;

  constructor(httpService: HttpService, private urlService: UrlService, private appConfig: AppConfig) {
    this.http = httpService.getService();
  }

  /**
  * Get token login
  * @param param string
  * @returns {Object}
  */
  loginCompanyCode(param) {
    const url = this.urlService.getUrl(this.appConfig.LOGIN_WITH_CODE) + '?pin=' + param;
    return this.http.get(url);
  }

  /**
  * Get user profile
  * @returns {Object}
  */
  getUserProFile () {
    return this.http.get<UserProfile>(this.urlService.getUrl(this.appConfig.USER_PROFILE));
  }
}
