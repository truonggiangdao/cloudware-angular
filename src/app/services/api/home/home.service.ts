import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@app/services/api/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { IHomeResponse } from '@app/common/classes/api/home/IHomeResponse';

@Injectable()
export class HomeService {

  constructor(private http: HttpService, private appConfig: AppConfig) {
  }

  /**
  * Get home page's content
  * @returns Observable
  */
  getContent() {
    return this.http.get<IHomeResponse>(this.appConfig.GET_HOME_CONTENT);
  }
}
