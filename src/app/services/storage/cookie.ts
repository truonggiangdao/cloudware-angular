import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class Cookie {
  constructor(private cookieService: CookieService) {}
  /**
   * set cookie
   * @returns {void}
   */
  set = (name, value, expires?: number | Date) => {
    return this.cookieService.set(name, value, expires = 365);
  }

  /**
   * get cookie
   * @returns {string}
   */
  get = (name) => {
    return this.cookieService.get(name);
  }

  /**
   * check cookie
   * @returns {string}
   */
  check = (name) => {
    return this.cookieService.check(name);
  }

  /**
   * check cookie
   * @returns {void}
   */
  delete = (name) => {
    return this.cookieService.delete(name);
  }
}
