import type { CreatePostResponse, Post, PostInput, PostListResponse, ApiErrorResponse } from '@/src/types/post';

function postsUrl() {
  const base = process.env.API_BASE_URL || `http://127.0.0.1:${process.env.PORT || '3000'}`;
  return new URL('/api/posts', base);
}

export async function getPosts(page: number, q = ''): Promise<PostListResponse> {
  const url = postsUrl();
  url.searchParams.set('q', q);
  url.searchParams.set('page', String(page));
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error('게시글 목록을 불러오지 못했습니다.');
  return response.json();
}

export async function getPost(id: string, countView = true): Promise<Post | null> {
  if (!/^[1-9]\d*$/.test(id)) return null;
  const response = await fetch(`${postsUrl()}/${id}${countView ? '' : '?view=0'}`, { cache: 'no-store' });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('게시글을 불러오지 못했습니다.');
  return response.json();
}

export async function createPost(input: PostInput): Promise<CreatePostResponse> {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  await checkMutation(response);
  return response.json();
}

async function checkMutation(response: Response) {
  if (!response.ok) {
    const error: ApiErrorResponse | null = await response.json().catch(() => null);
    throw new Error(error?.message || '게시글 요청에 실패했습니다.');
  }
}

export async function updatePost(id: number, input: PostInput, token: string): Promise<Post> {
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  await checkMutation(response);
  return response.json();
}

export async function deletePost(id: number, token: string): Promise<void> {
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  await checkMutation(response);
}
