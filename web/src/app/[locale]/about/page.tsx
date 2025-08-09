import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
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
  const t = await getTranslations({ locale, namespace: 'about' });

  return generatePageMetadata({
    locale,
    pagePath: '/about',
    additionalMetadata: {
      title: t('seo.title'),
      description: t('seo.description')
    }
  });
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <div className='w-full lg:px-16'>
      <Heading title='About' />
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p className='mb-4'>
          Welcome to <strong>understandme2.com</strong> – your space for exploring
          personality, emotional resilience, and the science of self-awareness.
          Our platform is here to make personality psychology both insightful
          and practical, whether you’re here out of curiosity or looking to
          improve your well-being.
        </p>

        <h2 className='text-xl font-semibold mt-6 mb-2'>Who We Are</h2>
        <p className='mb-4'>
          The site is founded and maintained by{' '}
          <a
            href='https://www.linkedin.com/in/kim-larsen-725b52352/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Kim Larsen
          </a>
          , a freelance mental health advisor passionate about making mental
          health and personality insights accessible to everyone. The project is
          a fork of an open-source GitHub project, proudly shared under the{' '}
          <strong>MIT License</strong>.
        </p>

        <h2 className='text-xl font-semibold mt-6 mb-2'>What We Offer</h2>
        <p className='mb-2'>
          We use the renowned <strong>Big Five</strong> personality model to
          give you clear, research-backed insights into five key traits:
          Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional
          Stability (also known as Neuroticism, in its inverse form).
        </p>
        <ul className='mb-4 pl-5 list-disc'>
          <li className='mb-2'>
            <strong>Comprehensive Articles</strong> – Discover how personality
            impacts life areas such as teamwork, leadership, parenting, and
            mental health.
          </li>
          <li className='mb-2'>
            <strong>Free Personality Tests</strong> – Quick, anonymous, and
            insightful assessments to better understand yourself.
          </li>
          <li className='mb-2'>
            <strong>Practical Applications</strong> – Learn how to use personality
            insights in education, personal development, sports teams, and
            workplace collaboration.
          </li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 mb-2'>Who Can Benefit?</h2>
        <ul className='mb-4 pl-5 list-disc'>
          <li className='mb-2'>
            <strong>Individuals</strong> – Build self-awareness and strategies
            for personal growth.
          </li>
          <li className='mb-2'>
            <strong>Parents</strong> – Support your child’s mental resilience by
            understanding their personality.
          </li>
          <li className='mb-2'>
            <strong>Educators</strong> – Foster a positive classroom culture
            through personality-based approaches.
          </li>
          <li className='mb-2'>
            <strong>Teams & Leaders</strong> – Improve collaboration and
            performance using personality insights.
          </li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 mb-2'>Privacy First</h2>
        <p className='mb-4'>
          Your trust matters. Our personality test is fully anonymous – no login
          required, no personal data stored, no tracking of individual results.
          Just some basic ads to keep the lights on.
        </p>

        <h2 className='text-xl font-semibold mt-6 mb-2'>Join the Journey</h2>
        <p className='mb-4'>
          Understanding personality is not about labeling—it’s about growth,
          empathy, and connection. Whether you’re here to take our free test,
          read an article, or simply reflect on your own personality, we hope
          you find something valuable. Start your journey now, and discover the
          power of understanding yourself and others.
        </p>

<p className='mb-4'>
  Ready?{' '}
  <Link href='/' className='underline'>
    Take the free test
  </Link>{' '}
  or visit our{' '}
  <a
    href='https://www.linkedin.com/in/kim-larsen-725b52352/?utm_source=understandme2.com&utm_medium=referral'
    target='_blank'
    rel='noopener'
    className='underline'
  >
    LinkedIn profile
  </a>{' '}
  or{' '}
  <a
    href='https://www.instagram.com/phdlark/'
    target='_blank'
    rel='noopener'
    className='underline'
  >
    Instagram profile
  </a>{' '}
  for more insights and updates.
</p>

        <p>
          Still have questions? Our{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          might have the answers you need.
        </p>
      </div>
    </div>
  );
}
