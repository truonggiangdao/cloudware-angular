import { IArticlesResponse } from './IArticlesResponse';
import { Article } from '../../content/Article';
import { ArticleApi } from './ArticleApi';

export class ArticlesResponse implements IArticlesResponse {
  data: ArticleApi[];
}
