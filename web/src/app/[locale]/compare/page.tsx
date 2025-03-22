import { useTranslations } from 'next-intl';
import { ComparePeople } from './compare-people';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { Heading } from '@/components/heading';

interface Props {
  params: { locale: string };
  searchParams: { id: string };
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
