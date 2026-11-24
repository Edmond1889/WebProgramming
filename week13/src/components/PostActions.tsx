'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { deletePost } from '@/src/services/postApi';

export function PostActions({ id }: { id: number }) {
  const [token, setToken] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef(false);
  const key = `post:${id}:editToken`;
  useEffect(() => {
    try { setToken(localStorage.getItem(key) ?? ''); }
    catch { setToken(''); }
  }, [key]);

  async function remove() {
    if (pending.current || !window.confirm('이 게시글을 삭제할까요?')) return;
    pending.current = true;
    setBusy(true);
    try {
      await deletePost(id, token);
      try { localStorage.removeItem(key); } finally { window.location.replace('/posts'); }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '삭제에 실패했습니다.');
      pending.current = false;
      setBusy(false);
    }
  }

  if (!token) return null;
  return (
    <div>
      <div className="actions">
        <Link className="button button-secondary" href={`/posts/${id}/edit`}>수정</Link>
        <button className="button button-secondary" disabled={busy} onClick={remove}>삭제</button>
      </div>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
