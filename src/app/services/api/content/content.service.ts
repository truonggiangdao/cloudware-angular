import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@app/services/api/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { IArticlesResponse } from '@app/common/classes/api/content/IArticlesResponse';
import { IPostsResponse } from '@app/common/classes/api/content/IPostsResponse';

@Injectable()
export class ContentService {

  constructor(private http: HttpService, private appConfig: AppConfig) {
  }

  /**
  * Get list of articles
  * @returns Observable
  */
  getArticles() {
    return this.http.get<IArticlesResponse>(this.appConfig.GET_ARTICLES);
  }

  /**
  * Get list of posts
  * @returns Observable
  */
  getPosts() {
    return this.http.get<IPostsResponse>(this.appConfig.GET_POSTS);
  }
}
