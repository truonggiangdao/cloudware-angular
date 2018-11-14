import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '@app/common/classes/AppConfig';
import { Observable } from 'rxjs';

export const HTTP_VERBS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

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

  getUrl(endpoint: string) {
    let url = '';
    if (this.appConfig.API_URL_FORMAT) {
      url = this.appConfig.API_URL_FORMAT
      .replace(this.appConfig.API_KEY, this.appConfig.API_URL)
      .replace(this.appConfig.END_POINT_KEY, endpoint);
    }
    return url;
  }

  request<T>(verb: string, endpoint: string, params: Object = {}, includeToken = true) {
    const url = this.getUrl(endpoint);
    const options = {
      headers: new HttpHeaders({ includeToken: includeToken ? 'TRUE' : '' }),
      params: new HttpParams(params),
    };
    let request: Observable<T>;
    switch (verb) {
      case HTTP_VERBS.POST:
        request = this.http.post<T>(url, options);
        break;

      case HTTP_VERBS.PUT:
        request = this.http.put<T>(url, options);
        break;

      case HTTP_VERBS.DELETE:
        request = this.http.delete<T>(url, options);
        break;

      default:
        request = this.http.get<T>(url, options);
        break;
    }
    return request;
  }

  getQueryString(params: Object = {}) {
    return Object.keys(params).reduce((accummulated, currentKey) => {
      if (!accummulated) {
        accummulated = '';
      }
      if (params[currentKey]) {
        accummulated = (accummulated ? `${accummulated}&` : '') + `${currentKey}=${params[currentKey]}`;
      }
      return accummulated;
    });
  }

  get<T>(endpoint: string, params: Object = {}, includeToken = true) {
    return this.request<T>(HTTP_VERBS.GET, endpoint, params, includeToken);
  }

  post<T>(endpoint: string, params: Object = {}, includeToken = true) {
    return this.request<T>(HTTP_VERBS.POST, endpoint, params, includeToken);
  }

  put<T>(endpoint: string, params: Object = {}, includeToken = true) {
    return this.request<T>(HTTP_VERBS.PUT, endpoint, params, includeToken);
  }

  delete<T>(endpoint: string, params: Object = {}, includeToken = true) {
    return this.request<T>(HTTP_VERBS.DELETE, endpoint, params, includeToken);
  }
}
