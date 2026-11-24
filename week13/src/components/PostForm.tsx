'use client';

import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import type { Post } from '@/src/types/post';
import { createPost, updatePost } from '@/src/services/postApi';

export function PostForm({ post }: { post?: Post }) {
  const pending = useRef(false);
  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.content ?? '');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (!title.trim() || title.trim().length > 100 || !content.trim() || content.trim().length > 5000) {
      setError('공백을 제외한 제목 1~100자와 본문 1~5,000자를 입력해 주세요.');
      return;
    }
    pending.current = true;
    setIsSubmitting(true);
    try {
      const input = { title: title.trim(), content: content.trim() };
      if (post) {
        const token = localStorage.getItem(`post:${post.id}:editToken`);
        if (!token) throw new Error('이 브라우저에 수정 권한이 없습니다.');
        await updatePost(post.id, input, token);
        window.location.replace(`/posts/${post.id}`);
        return;
      }
      const { post: created, editToken } = await createPost(input);
      try {
        localStorage.setItem(`post:${created.id}:editToken`, editToken);
      } catch {
        // 브라우저 저장소가 차단되어도 등록된 글을 열 수 있다.
      }
      window.location.replace(`/posts/${created.id}`);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '게시글을 등록하지 못했습니다.');
      pending.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface post-form">
      <div className="form-field"><label htmlFor="author">작성자</label><input id="author" value="익명" readOnly className="author-input" /><p className="field-hint">모든 이야기는 익명으로 등록됩니다.</p></div>
      <div className="form-field"><div className="label-row"><label htmlFor="title">제목</label><span id="title-count">{title.length} / 100</span></div><input id="title" name="title" placeholder="어떤 이야기를 나누고 싶으세요?" value={title} onChange={(event) => { setTitle(event.target.value); setError(''); }} maxLength={100} required aria-describedby="title-count" /></div>
      <div className="form-field"><div className="label-row"><label htmlFor="content">내용</label><span id="content-count">{content.length} / 5,000</span></div><textarea id="content" name="content" placeholder="당신의 생각을 편하게 남겨 주세요. 서로를 존중하는 따뜻한 이야기를 기다립니다." value={content} onChange={(event) => { setContent(event.target.value); setError(''); }} maxLength={5000} required rows={10} aria-describedby="content-count" /></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions"><Link href="/posts" className="button button-secondary">취소</Link><button type="submit" className="button button-primary" disabled={isSubmitting}>{isSubmitting ? '저장 중…' : post ? '수정 저장' : '이야기 등록'}</button></div>
    </form>
  );
}
