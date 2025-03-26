import { Heading } from '@/components/heading';
import { generatePageMetadata } from '@/lib/metadata';

export const generateMetadata = ({
  params
}: {
  params: { locale: string };
}) => {
  return generatePageMetadata({
    locale: params.locale,
    pagePath: '/privacy'
  });
};

export default function PrivacyPage() {
  return (
    <div className='lg:px-16'>
      <Heading title='Privacy policy' />
      <div className='mt-6'>
        We collect this from you, when you visit us.
        <h2>Wonder what we are talking about?</h2>
        These data are retrived
        <br />
        <br />
        <ul>
          <li>Test language</li>
          <li>Your answers</li>
          <li>When you did submit the test</li>
        </ul>
        <br />
        Some analytics from Google Analytics is used to improve the trafic.
        Google Analytics terms confirms that no personally or identifiable
        information is collected.
        <br />
        <br />
        Google Analytics privacy policy excplained{' '}
        <a
          href='https://policies.google.com/privacy'
          rel='noopener noreferrer'
          target='_blank'
        >
          here
        </a>
        .<h2>Your collected data by Google Analytics</h2>
        The following cookies:
        <br />
        <br />
        <ul>
          <li>
            &quot;_ga&quot; is used to distingusih users. The cookie is set the
            first time use and with a lifetime of until 2 years
          </li>
          <li>
            &quot;_gat&quot; limit Google Analytics trafic, 10 min lifetime .
          </li>
        </ul>
        <br />
        Som browser information is automatically sent to our webservice.
        <br />
        I.e. information about browser/version, your IP-address, ttime
        information, and where you came from, are also stored.
        <br />
        <br />
        When you finish the test, this will be stored in understandme2.
        <h2>We use and store your data </h2>
        Google Analytics gives us insite to get statistics on how visitors use
        the site.
        <br />
        <br />
        Aggregated and statistic data from tests can be used for analytical
        purposes. And stored for a short periode of time.
        <h2></h2>
        <h2>Contact us?</h2>
        Questions regarding this privacy policy, use{' '}
        <a
          href='mailto:contact@understandme2.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          contact
        </a>{' '}
        us.
      </div>
    </div>
  );
}
