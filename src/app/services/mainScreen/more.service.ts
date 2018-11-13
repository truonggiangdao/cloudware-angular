import { Injectable } from '@angular/core';
import { HttpService } from '@app/services/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '@app/services/url.service';
import { MorePopup } from '@app/common/classes/morePopup/MorePopup';

@Injectable({
  providedIn: 'root'
})
export class MoreService {

  http: HttpClient;

  constructor(httpService: HttpService, private appConfig: AppConfig, private urlService: UrlService) {
    this.http = httpService.getService();
  }

  getMoreContent() {
    let url;
    if (this.appConfig.MORE_POPUP) {
      url = this.urlService.getUrl(this.appConfig.MORE_POPUP);
    } else {
      url = this.appConfig.MORE_POPUP_SAMPLE;
    }
    return this.http.get<MorePopup>(url);
  }
}
