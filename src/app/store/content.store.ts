import { Injectable } from '@angular/core';
import { Article } from '@app/common/classes/content/Article';
import { Post } from '@app/common/classes/content/Post';
import { ArticleApi } from '@app/common/classes/api/content/ArticleApi';

@Injectable()
export class ContentStore {
  articles: Array<Article>;
  posts: Array<Post>;

  setArticles(articles: Array<ArticleApi>) {
    if (articles) {
      this.articles = articles.map(article => new Article(article.title, article.content));
    }
  }

  setPosts(posts: Array<Post>) {
    this.posts = posts;
  }
}
