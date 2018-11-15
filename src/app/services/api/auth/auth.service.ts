import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@app/services/api/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { ILoginResponse } from '@app/common/classes/api/auth/ILoginResponse';
import { IProfileResponse } from '@app/common/classes/api/auth/IProfileResponse';

@Injectable()
export class AuthService {

  constructor(private http: HttpService, private appConfig: AppConfig) {
  }

  /**
  * Get token login
  * @param email string
  * @param password string
  * @returns Observable
  */
  login(email: string, password: string) {
    return this.http.post<ILoginResponse>(this.appConfig.LOGIN, {email, password}, false);
  }

  /**
  * Get user's profile
  * @returns Observable
  */
  getUserProfile() {
    return this.http.get<IProfileResponse>(this.appConfig.GET_USER_PROFILE);
  }
}
