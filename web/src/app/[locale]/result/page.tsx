import { useTranslations } from 'next-intl';
import { GetResultPage } from './get-result';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Heading } from '@/components/heading';

interface Props {
  params: { locale: string };
}

export default function ResultPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getResult');

  return (
    <div className='lg:px-16'>
      <Heading
        title={t('result')}
        subtitle={t('explanation')}
        className='mb-10'
      />
      <GetResultPage
        viewPreviousText={t('viewPrevious')}
        getResultsText={t('getResult')}
      />
    </div>
  );
}
