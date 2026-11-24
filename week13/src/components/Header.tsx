'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isNew = pathname === '/posts/new';

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/posts" className="brand" aria-label="이름 없는 이야기 홈">
          <span className="brand-mark" aria-hidden="true">담</span>
          <span>이름 없는 이야기</span>
        </Link>
        <nav className="navigation" aria-label="주 메뉴">
          <Link href="/posts" aria-current={!isNew && pathname.startsWith('/posts') ? 'page' : undefined}>게시판</Link>
          <Link href="/posts/new" aria-current={isNew ? 'page' : undefined}>글쓰기</Link>
        </nav>
      </div>
    </header>
  );
}
