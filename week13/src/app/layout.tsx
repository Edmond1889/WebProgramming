import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/src/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: { default: '이름 없는 이야기 | 익명 게시판', template: '%s | 이름 없는 이야기' },
  description: '이름 없이 편하게 나누는 일상과 생각. 서로를 존중하는 익명 게시판입니다.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
          <a href="#main-content" className="skip-link">본문 바로가기</a>
          <Header />
          <main id="main-content" className="main-container">{children}</main>
      </body>
    </html>
  );
}
