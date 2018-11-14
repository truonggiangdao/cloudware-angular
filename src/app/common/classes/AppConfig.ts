import { Injectable } from '@angular/core';
import { IAppConfig } from './IAppConfig';

@Injectable()
export class AppConfig implements IAppConfig {
  APP_CONFIG_FILE = 'assets/app.conf.json';
  API_URL_FORMAT: string;
  API_URL: string;
  API_KEY: string;
  END_POINT_KEY: string;
  LOGIN: string;
  GET_HOME_CONTENT: string;
  GET_POSTS: string;
  GET_ARTICLES: string;
}
