import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '@/components/post-card';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Heading } from '@/components/heading';
import { generatePageMetadata } from '@/lib/metadata';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return generatePageMetadata({
    locale,
    pagePath: '/articles'
  });
}

export default function ArticlesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className='w-full lg:px-16'>
      <Heading
        title='Articles on personalityes'
        subtitle='Some articles on Personality'
      />
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
