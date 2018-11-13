import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@app/services/requestHandlers/token';
import { AppConfig } from '@app/common/classes/AppConfig';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private bearer: Token, private appConfig: AppConfig) {}
  /**
   * Check url request don't using token
   * @returns {Boolean}
   */
  checkUrlUsingToken(url) {
    let checkURL = false;
    const urls = [
      this.appConfig.APP_CONFIG_FILE,
      ...this.appConfig.NO_TOKEN_REQUEST
    ];
    if (url) {
      const arrURL = url.split('?');
      if (arrURL.length > 0) {
        if (urls.indexOf(arrURL[0]) !== -1) {
          checkURL = true;
        }
        if (arrURL[0].indexOf('http') !== -1) {
          let endpoint = arrURL[0].split('/');
          endpoint = endpoint[endpoint.length - 1].split('.');
          if (urls.indexOf(endpoint[0]) !== -1) {
            checkURL = true;
          }
        }
      }
    }
    return checkURL;
  }

  /**
   * Set header request
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone();
    if (!this.checkUrlUsingToken(req.url)) {
      tokenizedReq = req.clone(
        {
          headers: req.headers.set('x-authorization', this.bearer.setTokenHeader())
        }
      );
    }
    return next.handle(tokenizedReq);
  }
}
