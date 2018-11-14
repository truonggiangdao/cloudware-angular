import { Injectable } from '@angular/core';
import { Cookie } from '@app/services/storage/cookie';

export const AUTH_TOKEN_KEY = 'jwt_token';

@Injectable()
export class TokenService {
  tokenKey = AUTH_TOKEN_KEY;

  constructor(private cookie: Cookie) { }

  getToken() {
    return this.cookie.get(this.tokenKey);
  }

  setToken(token) {
    return this.cookie.set(this.tokenKey, token);
  }

  clearToken() {
    return this.cookie.delete(this.tokenKey);
  }

  getTokenBearer() {
    const token = this.getToken();
    let bearer = '';
    if (token) {
      bearer = `Bearer ${token}`;
    }
    return bearer;
  }
}
