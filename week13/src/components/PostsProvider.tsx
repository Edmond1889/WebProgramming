'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { mockPosts } from '@/src/data/mockPosts';
import type { Post, PostInput } from '@/src/types/post';

interface PostsContextValue {
  posts: Post[];
  addPost: (input: PostInput) => number;
}

const PostsContext = createContext<PostsContextValue | null>(null);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  function addPost(input: PostInput): number {
    const id = Date.now();
    const post: Post = {
      id,
      title: input.title.trim(),
      content: input.content.trim(),
      author: '익명',
      createdAt: new Date().toISOString(),
      views: 0,
    };
    setPosts((current) => [post, ...current]);
    return id;
  }

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts(): PostsContextValue {
  const context = useContext(PostsContext);
  if (!context) throw new Error('PostsProvider 내부에서 사용해야 합니다.');
  return context;
}
