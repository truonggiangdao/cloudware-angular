import { ILoginResponse } from './ILoginResponse';

export class LoginResponse implements ILoginResponse {
  fullname: string;
  token: string;
}
