import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>About</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p>
          Welcome to understandme2.com – your gateway to fascinating personality insights!
          Our free and user-friendly test is based on the renowned Big Five model and provides 
          a deeper understanding of five key personality traits: Openness, Conscientiousness, 
          Extraversion, Agreeableness, and Emotional Stability.
        </p>
        <br />
        <p>
          Whether you’re an individual seeking self-awareness, a company looking to enhance teamwork, 
          a sports team optimizing group dynamics, an organization aiming for better collaboration, 
          or an educator integrating it into learning – our test offers valuable insights.
        </p>
        <p>
          And why not turn it into a social activity? The test can also be a fun icebreaker at parties 
          or social gatherings! Discover yourself and those around you in a whole new way with 
          understandme2.com – where psychology meets engagement and practical use in every setting.
        </p>
        <br />
        <p>
          What if... you wonder read the{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          . You may try to contact us, but the faq hopefully gives you the answers you need.
        </p>
      </div>

    </>
  );
}
