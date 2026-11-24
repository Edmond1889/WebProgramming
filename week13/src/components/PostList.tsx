import Link from 'next/link';
import type { PostListResponse } from '@/src/types/post';
import { formatDate } from '@/src/lib/formatDate';

export function PostList({ posts, total, page, size, q }: PostListResponse & { q: string }) {

  return (
    <section className="board-section" aria-labelledby="board-title">
      <div className="section-toolbar">
        <div className="section-title"><h1 id="board-title">{q ? "검색 결과" : "익명 게시판"}</h1><span className="count">{total}</span></div>
        <Link href="/posts/new" className="button button-primary">글쓰기</Link>
      </div>
      <form action="/posts" role="search" className="board-search">
        <label className="sr-only" htmlFor="query">제목 검색</label>
        <input key={q} id="query" name="q" type="search" placeholder="게시글 제목 검색" defaultValue={q} />
        <button className="button button-secondary">검색</button>
        {q && <Link href="/posts">전체 보기</Link>}
      </form>
      <div className="table-scroll">
        <table className="post-table">
          <caption className="sr-only">익명 게시글 목록</caption>
          <thead><tr><th scope="col" className="number-cell">번호</th><th scope="col">제목</th><th scope="col">작성자</th><th scope="col">작성일</th><th scope="col" className="views-cell">조회수</th></tr></thead>
          <tbody>
            {posts.length === 0 && (
              <tr><td colSpan={5} className="empty-cell">
                <strong>{q ? '검색 결과가 없어요' : '아직 게시글이 없어요'}</strong>
                <p>{q ? '다른 제목으로 검색해 보세요.' : '첫 번째 이야기를 남겨 주세요.'}</p>
              </td></tr>
            )}
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td className="number-cell muted">{total - (page - 1) * size - index}</td>
                <td className="title-cell"><Link prefetch={false} href={`/posts/${post.id}`}>{post.title}</Link></td>
                <td><span className="author">{post.author}</span></td>
                <td className="muted"><time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time></td>
                <td className="views-cell muted">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="actions" aria-label="목록 페이지">{page > 1 && <Link href={`/posts?q=${encodeURIComponent(q)}&page=${page - 1}`}>이전 페이지</Link>}{page * size < total && <Link href={`/posts?q=${encodeURIComponent(q)}&page=${page + 1}`}>다음 페이지</Link>}</nav>
    </section>
  );
}
