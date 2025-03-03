import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { Heading } from '@/components/heading';

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
    <div className='lg:px-16'>
      <Heading title='About' />
      <div className='mt-6 text-medium lg:text-large'>

<p>
    About Us

    <br>Understanding Personality, Unlocking Potential
    <p>Welcome to our platform dedicated to the <strong>Big Five Personality Model</strong>—a scientifically backed framework for understanding human personality. Some of the tech is inherited from Rubynors github, modified and changed.
      Whether you_re here to explore your own traits, improve relationships, or gain deeper insights into mental well-being, our goal is to make personality psychology accessible, insightful, and practical.</p>

    <br><strong>What is the Big Five Personality Model?</strong>
    <p>The <strong>Big Five Model</strong>, also known as the <strong>Five-Factor Model (FFM)</strong>, is one of the most widely accepted and research-backed theories 
      of personality. It categorizes personality into five core dimensions:</p>

    <ul>
        <li><strong>Openness to Experience</strong> – Creativity, curiosity, and willingness to embrace new ideas.</li>
        <li><strong>Conscientiousness</strong> – Organization, responsibility, and self-discipline.</li>
        <li><strong>Extraversion</strong> – Energy, sociability, and preference for social interaction.</li>
        <li><strong>Agreeableness</strong> – Empathy, kindness, and cooperation.</li>
        <li><strong>Neuroticism</strong> – Emotional sensitivity, stress response, and mood stability.</li>
    </ul><br>

    <strong>How Our Platform Helps</strong>
    <p>Our website is designed to provide valuable <strong>personality insights</strong> through engaging <strong>articles, guides, and exercises</strong>. Here’s what you’ll find:</p>

    <ul>
        <li><strong>Comprehensive Articles</strong> – Explore how personality impacts different aspects of life, from teamwork and leadership to parenting and mental health.</li>
        <li><strong>Personality Tests</strong> – Learn more about your own Big Five traits with quick and insightful assessments.</li>
        <li><strong>Practical Applications</strong> – Discover how to use personality psychology in education, family dynamics, sports teams, and personal development.</li>
    </ul>
   
    <stron>Who Can Benefit?</strong><br>
      <ul>
        <li><strong>Individuals</strong> – Gain self-awareness and strategies for personal growth.</li>
        <li><strong>Parents</strong> – Understand your child’s personality and support their mental resilience.</li>
        <li><strong>Educators</strong> – Foster a positive classroom environment through personality-based approaches.</li>
        <li><strong>Teams & Leaders</strong> – Use personality insights to enhance collaboration and performance.</li>
    </ul>

    <strong>Your Privacy Matters</strong>
    <p>We prioritize <strong>privacy and security</strong>. Our personality test does not store personal data, does not require login, and does not collect identifying information. 
      The test is anonymous, ensuring a safe and confidential experience for all users. Some ads to get the webpage running.</p>
<br>
    <strong>Join the Journey of Self-Discovery</strong>
    <p>Understanding personality is <strong>not about labeling</strong>—it_s about <strong>growth, connection, and unlocking potential</strong>. Whether you_re taking the test, r
      eading our articles, or applying Big Five insights in daily life, we_re here to support your journey toward deeper self-awareness and better relationships.</p>

    <p>Ready to explore? <a href="https://www.understandme2.com/test">Take the test</a>, read our insights, and discover the power of personality psychology today!</p>

          
          What if... you wonder read the{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          . You may try to contact us, but the faq hopefully gives you the
          answers you need.
        </p>
      </div>
    </div>
  );
}
