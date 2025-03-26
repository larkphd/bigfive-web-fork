import { useTranslations } from 'next-intl';
import { ComparePeople } from './compare-people';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { Heading } from '@/components/heading';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

interface Props {
  params: { locale: string };
  searchParams: { id: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    locale,
    pagePath: '/compare'
  });
}

export default function ComparePage({
  params: { locale },
  searchParams: { id }
}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getCompare');

  return (
    <div className='lg:px-16'>
      <Heading title={t('title')} subtitle={t('description1')} />
      <Suspense fallback='loading...'>
        <ComparePeople
          addPersonText={t('addPerson')}
          comparePeopleText={t('comparePeople')}
          paramId={id}
        />
      </Suspense>
    </div>
  );
}
