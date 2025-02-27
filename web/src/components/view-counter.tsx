import { unstable_noStore as noStore } from 'next/cache';

interface ViewCounterProps {
  postId: string;
}

export async function ViewCounter({ postId }: ViewCounterProps) {
  'use server';
  noStore();
  const views = 0;

  return <p>{Intl.NumberFormat('en-us').format(views)} views</p>;
}
