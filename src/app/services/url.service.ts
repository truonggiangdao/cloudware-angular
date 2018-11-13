import { Injectable } from '@angular/core';
import { AppConfig } from '@app/common/classes/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private appConfig: AppConfig) { }

  /**
   * Get url api
   * @param typeEndPoint Endpoint of url api
   * @returns {String}
   */
  getUrl = (typeEndPoint) => {
    let url = '';
    if (this.appConfig.API_URL_FORMAT) {
        url = this.appConfig.API_URL_FORMAT.replace(this.appConfig.API_KEY, this.appConfig.API_URL)
            .replace(this.appConfig.END_POINT_KEY, typeEndPoint);
    }
    return url;
  }
}
