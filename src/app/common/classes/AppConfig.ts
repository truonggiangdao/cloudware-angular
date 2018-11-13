import { Injectable } from '@angular/core';
import { IAppConfig } from '@app/common/interfaces/IAppConfig';

@Injectable()
export class AppConfig implements IAppConfig {
  AUTHENTICATED: boolean;
  APP_CONFIG_FILE = 'assets/app.conf.json';
  REFRESH: boolean;
  REFRESH_DURATION: number;
  API_URL: string;
  API_URL_FORMAT: string;
  API_KEY: string;
  END_POINT_KEY: string;
  SHOW_LOADING_ICON: Array<string> = [];
  LOGIN: string;
  LOGIN_WITH_CODE: string;
  NO_TOKEN_REQUEST: Array<string> = [];
  USER_PROFILE: string;
  LOCATION: string;
  FLOOR: string;
  OFFICE: string;
  MAP_LOCATION: string;
  MAP_LOCATION_DATA: string;
  MAP_LOCATION_ROUTES: string;
  MORE_POPUP: string;
  MORE_POPUP_SAMPLE: string;
  DEFAULT_PARAMETER: string;
}
