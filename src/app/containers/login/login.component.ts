import { Component, OnInit } from '@angular/core';
import { isCompanyCodeLogin } from '@app/common/utils/validateHelper';
import { AuthService } from '@app/services/api/auth.service';
import { Router } from '@angular/router';
import deviceHelper from '@app/common/utils/deviceHelper';
import { TokenService } from '@app/services/token.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { NetworkConnection } from '@app/common/classes/NetworkConnection';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  companyCode = '';
  errorMessage = '';
  isKeyboardOn = false;
  isCodeValid = false;
  checkInterval;

  constructor(
    private login: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private appConfig: AppConfig,
  ) { }

  ngOnInit() {
    this.toggleErrorMessage(false);
  }

  onKeyup = (event) => {
    this.errorMessage = '';
    this.validateCode();
    if (event.keyCode === 13 && this.isCodeValid) {
      this.onLogin();
    }
  }

  onChange = () => {
    this.errorMessage = '';
    this.validateCode();
  }

  initInputCheckInterval = () => {
    if (!this.checkInterval) {
      this.checkInterval = setInterval(this.validateCode, 500);
    }
  }

  clearInputCheckInterval = () => {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }

  validateCode = () => {
    this.isCodeValid = this.companyCode && isCompanyCodeLogin(this.companyCode);
  }

  toggleErrorMessage = (isError) => {
    if (isError) {
      this.errorMessage = 'Incorrect company registration code';
    } else {
      this.errorMessage = '';
    }
  }

  onLogin = () => {
    this.clearInputCheckInterval();
    this.login.login(this.email, this.password)
      .subscribe(
        this.doAfterLogin,
        this.doAfterLoginErr,
      );
  }

  doAfterLogin = (data) => {
    if (data && data._JWT) {
      this.tokenService.setToken(data._JWT);
      this.goToMainScreen();
    } else {
      this.companyCode = '';
      this.toggleErrorMessage(true);
      this.validateCode();
    }
    return data;
  }

  doAfterLoginErr = (err) => {
    this.companyCode = '';
    this.errorMessage = 'Network failure';
    this.validateCode();
    return err;
  }

  goToMainScreen = () => {
    this.router.navigate(['/']);
  }
}
