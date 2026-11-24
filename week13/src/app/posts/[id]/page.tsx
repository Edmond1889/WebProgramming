import type { Metadata } from 'next';
import { PostDetail } from '@/src/components/PostDetail';

import { notFound } from 'next/navigation';
import { getPost } from '@/src/services/postApi';

export const metadata: Metadata = { title: '이야기 읽기' };

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
