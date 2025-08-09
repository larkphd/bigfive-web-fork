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
    <div className="lg:px-16">
      <Heading title="Privacy Policy" />
      <div className="prose prose-neutral dark:prose-invert max-w-none mt-6">
        <p><strong>Effective date:</strong> [Insert date]</p>
        <p>
          We respect your privacy and are committed to protecting your personal data.
          This policy explains what we collect, why we collect it, and how we use it.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Test language</strong> you select.</li>
          <li><strong>Your answers</strong> to the test questions.</li>
          <li><strong>Date and time</strong> you submit the test.</li>
        </ul>
        <p>
          Your browser also automatically shares technical information with our server (standard for all websites),
          including IP address, browser and version, time of access, and the referring page (if any).
        </p>

        <h2>2. Analytics and Advertising</h2>
        <p>
          We use <strong>Google Analytics</strong> to understand how visitors use our site and improve our services.
          We may also use <strong>Google Ads</strong> in the future to display relevant ads.
          These services use cookies to collect aggregated, non‑personally identifiable information (pages visited, time on page, approximate location, device and browser).
        </p>
        <p><strong>Google Analytics cookies:</strong></p>
        <ul>
          <li><code>_ga</code> – distinguishes users (expires up to 2 years).</li>
          <li><code>_gat</code> – limits request rate (expires after 10 minutes).</li>
        </ul>
        <p>
          Google’s terms prohibit sending personally identifiable information. Learn more in
          {' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            Google’s Privacy &amp; Terms
          </a>.
        </p>

        <h2>3. GDPR and Consent</h2>
        <p>
          If you are in the EU/EEA, we will only set Analytics/Ads cookies after your <strong>explicit consent</strong>
          via our cookie banner. You can withdraw consent at any time (e.g., via your browser’s cookie settings).
        </p>
        <p>
          Our legal basis under the GDPR is:
        </p>
        <ul>
          <li><strong>Consent</strong> – for analytics and advertising cookies.</li>
          <li><strong>Legitimate interest</strong> – for strictly necessary site functionality.</li>
        </ul>

        <h2>4. Use and Storage of Data</h2>
        <p>
          We use aggregated test results and analytics data to improve the site and perform statistical analysis.
          Individual test responses are stored in our internal system (“understandme2”) for processing and aggregation,
          then deleted or anonymized within a reasonable time period.
        </p>

        <h2>5. Data Retention</h2>
        <ul>
          <li>Analytics cookies persist up to their stated lifetimes unless you delete them earlier.</li>
          <li>Test responses are retained only as long as necessary for processing/aggregation.</li>
          <li>Aggregated, non‑personal statistics may be retained for research and reporting.</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>
          Under the GDPR you may request access, correction, deletion, or restriction of your personal data, and you may withdraw consent at any time.
          You also have the right to lodge a complaint with your local data protection authority.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Contact us at{' '}
          <a href="mailto:phdlark@gmail.com" target="_blank" rel="noopener noreferrer">
            phdlark@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
