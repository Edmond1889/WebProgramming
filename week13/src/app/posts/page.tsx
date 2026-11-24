import { PostList } from '@/src/components/PostList';

import { getPosts } from '@/src/services/postApi';

export const dynamic = 'force-dynamic';

export default async function PostsPage({ searchParams }: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page);
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const result = await getPosts(Number.isSafeInteger(page) && page > 0 ? page : 1, q);
  return (
    <>
      <PostList {...result} q={q} />
    </>
  );
}
