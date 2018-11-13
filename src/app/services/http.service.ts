import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '@app/common/classes/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { }

  getConfig() {
    return this.http.get<AppConfig>(this.appConfig.APP_CONFIG_FILE);
  }

  getService() {
    return this.http;
  }
}
