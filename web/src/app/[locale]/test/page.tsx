import { getItems, getInfo } from '@bigfive-org/questions';
import { Survey } from './survey';
import { useTranslations } from 'next-intl';
import { saveTest } from '@/actions/test.actions';
import { unstable_setRequestLocale } from 'next-intl/server';
import { TestLanguageSwitch } from './test-language-switch';
import { generatePageMetadata } from '@/lib/metadata';

const questionLanguages = getInfo().languages;

export const generateMetadata = ({
  params
}: {
  params: { locale: string };
}) => {
  return generatePageMetadata({
    locale: params.locale,
    pagePath: '/test'
  });
};

interface Props {
  params: { locale: string };
  searchParams: { lang?: string };
}

export default function TestPage({
  params: { locale },
  searchParams: { lang }
}: Props) {
  unstable_setRequestLocale(locale);
  const language =
    lang || (questionLanguages.some((l) => l.id === locale) ? locale : 'en');
  const questions = getItems(language);
  const t = useTranslations('test');

  return (
    <>
      <div className='flex'>
        <TestLanguageSwitch
          availableLanguages={questionLanguages}
          language={language}
        />
      </div>
      <Survey
        questions={questions}
        nextText={t('next')}
        prevText={t('back')}
        resultsText={t('seeResults')}
        saveTest={saveTest}
        language={language}
      />
    </>
  );
}
