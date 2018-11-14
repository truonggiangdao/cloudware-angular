import { Injectable } from '@angular/core';
import { HttpService } from '@app/services/api/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private appConfig: AppConfig) {
  }

  /**
  * Get token login
  * @param email string
  * @param password string
  * @returns {Observable}
  */
  login(email: string, password: string) {
    return this.http.get(this.appConfig.LOGIN, {email, password});
  }
}
