import { Injectable } from '@angular/core';
import { Cookie } from '@app/services/storage/cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenKey = 'jwt_token';

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
}
