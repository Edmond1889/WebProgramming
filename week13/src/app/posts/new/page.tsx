import type { Metadata } from 'next';
import { PostForm } from '@/src/components/PostForm';

export const metadata: Metadata = { title: '새 이야기 쓰기' };

export default function NewPostPage() {
  return (
    <div className="reading-layout">
      <header className="page-heading"><h1>새 글 쓰기</h1></header>
      <PostForm />
    </div>
  );
}
