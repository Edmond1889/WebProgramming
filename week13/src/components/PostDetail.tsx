import { PostActions } from './PostActions';
import Link from 'next/link';
import type { Post } from '@/src/types/post';
import { formatDate } from '@/src/lib/formatDate';

export function PostDetail({ post }: { post: Post }) {
  return (
    <div className="reading-layout">
      <Link href="/posts" className="text-link">전체 이야기</Link>
      <article className="surface post-detail">
        <header className="detail-header">
          <h1>{post.title}</h1>
          <div className="post-meta"><span className="author">{post.author}</span><time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time><span>조회 {post.views}</span></div>
        </header>
        <div className="post-content">{post.content}</div>
        <PostActions id={post.id} />
      </article>
      <div className="actions"><Link href="/posts" className="button button-secondary">목록으로</Link><Link href="/posts/new" className="button button-primary">새 이야기 쓰기</Link></div>
    </div>
  );
}

