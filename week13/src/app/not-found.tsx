import Link from 'next/link';

export default function NotFound() {
  return <section className="surface empty-state"><p className="eyebrow">PAGE NOT FOUND</p><h1>이야기를 찾을 수 없어요</h1><p>게시글 주소를 확인해 주세요.</p><Link href="/posts" className="button button-primary">게시판으로</Link></section>;
}
