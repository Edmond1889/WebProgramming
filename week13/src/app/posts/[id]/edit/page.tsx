import { notFound } from 'next/navigation';
import { PostForm } from '@/src/components/PostForm';
import { getPost } from '@/src/services/postApi';

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const post = await getPost((await params).id, false);
  if (!post) notFound();
  return <div className="reading-layout"><h1>이야기 수정</h1><PostForm post={post} /></div>;
}
