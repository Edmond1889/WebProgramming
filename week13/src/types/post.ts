export interface Post {
  id: number;
  title: string;
  content: string;
  author: '익명';
  createdAt: string;
  views: number;
}

export type PostInput = Pick<Post, 'title' | 'content'>;

export interface PostListResponse {
  posts: Omit<Post, 'content'>[];
  total: number;
  page: number;
  size: number;
}

export interface CreatePostResponse {
  post: Post;
  editToken: string;
}

export interface ApiErrorResponse {
  message: string;
}
