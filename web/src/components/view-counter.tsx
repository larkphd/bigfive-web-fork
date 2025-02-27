'use server';
import { unstable_noStore as noStore } from 'next/cache';
import { incrementArticleViews } from '@/actions/articles.actions';

interface ViewCounterProps {
  postId: string;
}

export async function ViewCounter({ postId }: ViewCounterProps) {
  noStore();
  const views = await incrementArticleViews(postId);

  return <p>{Intl.NumberFormat('en-us').format(views)} views</p>;
}
