import { Injectable } from '@angular/core';
import { ILoginResponse } from './ILoginResponse';

@Injectable()
export class LoginResponse implements ILoginResponse {
  token: string;
}
