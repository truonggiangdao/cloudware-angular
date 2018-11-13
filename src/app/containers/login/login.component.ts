import { Component, OnInit } from '@angular/core';
import { isCompanyCodeLogin } from '@app/common/utils/validateHelper';
import { LoginService } from '@app/services/login/login.service';
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
  appTitle = 'Occuplus';
  organizationName = 'OfficeVitae';
  instruction = 'Enter company registration code';
  isKeyboardOn = false;
  isCodeValid = false;
  loading = false;
  checkInterval;
  stringLoadingDefault = 'login';

  constructor(
    private login: LoginService,
    private router: Router,
    private tokenService: TokenService,
    private appConfig: AppConfig,
    private viewport: ViewportDetails,
    private networkConnection: NetworkConnection,
  ) { }

  ngOnInit() {
    this.toggleErrorMessage(false);
  }

  checkShowLoadingIcon = () => {
    return (this.appConfig.SHOW_LOADING_ICON && this.appConfig.SHOW_LOADING_ICON.length > 0);
  }

  checkHasNetworkConnection = () => {
    return this.networkConnection.hasNetworkConnection;
  }

  onKeyup = (event) => {
    this.errorMessage = '';
    this.validateCode();
    if (!this.loading && event.keyCode === 13 && this.isCodeValid) {
      this.onLogin();
    }
  }

  onChange = () => {
    this.errorMessage = '';
    this.validateCode();
  }

  onFocusIn = () => {
    this.initInputCheckInterval();
    if (deviceHelper.isMobile() && !deviceHelper.isIPhone()) {
      this.isKeyboardOn = true;
    }
  }

  onFocusOut = () => {
    if (deviceHelper.isMobile()) {
      setTimeout(() => {
        this.isKeyboardOn = false;
      }, 10);
    }
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
    this.loading = true;
    this.appConfig.SHOW_LOADING_ICON.push(this.stringLoadingDefault);
    this.login.loginCompanyCode(this.companyCode)
      .subscribe(
        this.doAfterLogin,
        this.doAfterLoginErr,
      );
  }

  doAfterLogin = (data) => {
    if (data && data._JWT) {
      this.tokenService.setToken(data._JWT);
      this.appConfig.AUTHENTICATED = true;
      this.goToMainScreen();
    } else {
      this.companyCode = '';
      this.toggleErrorMessage(true);
      this.validateCode();
    }
    this.loading = false;
    this.appConfig.SHOW_LOADING_ICON.splice(this.appConfig.SHOW_LOADING_ICON.indexOf(this.stringLoadingDefault), 1);
    return data;
  }

  doAfterLoginErr = (err) => {
    if (!this.checkHasNetworkConnection()) {
      this.companyCode = '';
      this.errorMessage = 'Network failure';
      this.loading = false;
      this.validateCode();
    }
    this.appConfig.SHOW_LOADING_ICON.splice(this.appConfig.SHOW_LOADING_ICON.indexOf(this.stringLoadingDefault), 1);
    return err;
  }

  goToMainScreen = () => {
    this.router.navigate(['/']);
  }
}
