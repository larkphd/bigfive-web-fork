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

    <h1>About Us</h1>

    <h1>Understanding Personality, Unlocking Potential</h1>
    <p>Welcome to our platform dedicated to the <strong>Big Five Personality Model</strong>—a scientifically backed framework for understanding human personality. Whether you're here to explore your own traits, improve relationships, or gain deeper insights into mental well-being, our goal is to make personality psychology accessible, insightful, and practical.</p>

    <h1>What is the Big Five Personality Model?</h1>
    <p>The <strong>Big Five Model</strong>, also known as the <strong>Five-Factor Model (FFM)</strong>, is one of the most widely accepted and research-backed theories of personality. It categorizes personality into five core dimensions:</p>

    <ul>
        <li><strong>Openness to Experience</strong> – Creativity, curiosity, and willingness to embrace new ideas.</li>
        <li><strong>Conscientiousness</strong> – Organization, responsibility, and self-discipline.</li>
        <li><strong>Extraversion</strong> – Energy, sociability, and preference for social interaction.</li>
        <li><strong>Agreeableness</strong> – Empathy, kindness, and cooperation.</li>
        <li><strong>Neuroticism</strong> – Emotional sensitivity, stress response, and mood stability.</li>
    </ul>

    <h1>How Our Platform Helps</h1>
    <p>Our website is designed to provide valuable <strong>personality insights</strong> through engaging <strong>articles, guides, and exercises</strong>. Here’s what you’ll find:</p>

    <ul>
        <li><strong>Comprehensive Articles</strong> – Explore how personality impacts different aspects of life, from teamwork and leadership to parenting and mental health.</li>
        <li><strong>Personality Tests</strong> – Learn more about your own Big Five traits with quick and insightful assessments.</li>
        <li><strong>Practical Applications</strong> – Discover how to use personality psychology in education, family dynamics, sports teams, and personal development.</li>
    </ul>

    <h1>Who Can Benefit?</h1>
    <ul>
        <li><strong>Individuals</strong> – Gain self-awareness and strategies for personal growth.</li>
        <li><strong>Parents</strong> – Understand your child’s personality and support their mental resilience.</li>
        <li><strong>Educators</strong> – Foster a positive classroom environment through personality-based approaches.</li>
        <li><strong>Teams & Leaders</strong> – Use personality insights to enhance collaboration and performance.</li>
    </ul>

    <12>Your Privacy Matters</h1>
    <p>We prioritize <strong>privacy and security</strong>. Our personality test does not store personal data, does not require login, and does not collect identifying information. The test is completely anonymous, ensuring a safe and confidential experience for all users.</p>

    <h1>Join the Journey of Self-Discovery</h1>
    <p>Understanding personality is <strong>not about labeling</strong>—it’s about <strong>growth, connection, and unlocking potential</strong>. Whether you're taking the test, reading our articles, or applying Big Five insights in daily life, we’re here to support your journey toward deeper self-awareness and better relationships.</p>

    <p>Ready to explore? <a href="/test">Take the test</a>, read our insights, and discover the power of personality psychology today!</p>

        
          If you have questions please read through the{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          first. If you can&apos;t find an answer there, feel free to contact us
          at bigfive-test@rubynor.com.
        </p>
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>We love feedback!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-pink-500 animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            Send us feedback about how our features can be improved or specific
            issues.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
