import { Injectable } from '@angular/core';
import { TokenService } from '@app/services/token.service';

@Injectable()
export class UserStore {
  authenticated: boolean;
  fullname: string;

  constructor(
    private tokenService: TokenService,
  ) { }

  setProfile({ token, fullname }) {
    if (token) {
      this.tokenService.setToken(token);
      this.fullname = fullname;
      this.authenticated = true;
    } else {
      this.clear();
    }
  }

  clear() {
    this.tokenService.clearToken();
    this.fullname = '';
    this.authenticated = false;
  }
}
