import { Component } from '@angular/core';
import validator from '@app/common/utils/validateHelper';
import { AuthService } from '@app/services/api/auth/auth.service';
import { Router } from '@angular/router';
import { UserStore } from '@app/store/user.store';

export const LOGIN_FIELDS = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fields = LOGIN_FIELDS;
  email = '';
  password = '';
  error = {
    email: '',
    password: '',
    response: '',
  };
  requesting = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userStore: UserStore,
  ) { }

  onKeyup = (event) => {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  }

  onChange = (field) => {
    this.error.response = '';
    switch (field) {
      case this.fields.EMAIL:
        this.validateEmail();
        break;

      case this.fields.PASSWORD:
        this.validatePassword();
        break;
      default:
        break;
    }
  }

  validateEmail = () => {
    const valid = validator.validateEmail(this.email);
    if (valid) {
      this.error.email = '';
    } else {
      this.error.email = 'Invalid input';
    }
    return valid;
  }

  validatePassword = () => {
    const valid = validator.validatePassword(this.password);
    if (valid) {
      this.error.password = '';
    } else {
      this.error.password = 'Invalid input';
    }
    return valid;
  }

  validateLogin = () => {
    return this.validateEmail() && this.validatePassword();
  }

  requestLogin = () => {
    this.requesting = true;
    this.authService.login(this.email, this.password)
      .subscribe(
        this.doAfterLogin,
        this.doAfterLoginErr,
      );
  }

  onLogin = () => {
    if (this.validateLogin()) {
      this.error.response = '';
      this.requestLogin();
    }
  }

  clearForm = () => {
    this.email = '';
    this.password = '';
  }

  doAfterLogin = (data) => {
    this.userStore.setProfile(data);
    if (data && data.token) {
      this.goToMainScreen();
    } else {
      this.error.response = 'Invalid login credential';
    }
    this.clearForm();
    this.requesting = false;
    return data;
  }

  doAfterLoginErr = (err) => {
    this.clearForm();
    this.error.response = 'Invalid login credential';
    this.requesting = false;
    return err;
  }

  goToMainScreen = () => {
    this.router.navigate(['/main']);
  }
}
