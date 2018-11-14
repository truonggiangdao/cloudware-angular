import { IPostsResponse } from './IPostsResponse';
import { Post } from '../../content/Post';

export class PostsResponse implements IPostsResponse {
  data: Post[];
}
