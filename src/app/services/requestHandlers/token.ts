import { Injectable } from '@angular/core';
import { Cookie } from '@app/services/storage/cookie';

@Injectable({
  providedIn: 'root'
})
export class Token {
  constructor(private cookie: Cookie) {}

  /**
   * Set token
   * @returns {String}
   */
  setTokenHeader() {
    let bearer = '';
    const token = this.cookie.get('jwt_token');
    if (token) {
      bearer = 'Bearer ' + token;
    }
    return bearer;
  }
}
