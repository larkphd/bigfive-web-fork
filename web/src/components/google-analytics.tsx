'use client';

import React, { Suspense, useEffect } from 'react';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { getGAConsentFromLS, setGAConsent } from '@/utils/ga';

type PropsType = {
  gaId: string;
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC<PropsType> = ({ gaId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const { isAnalytics, isMarketing } = getGAConsentFromLS();

    setGAConsent({
      isAnalytics: !!isAnalytics,
      isMarketing: !!isMarketing
    });
  }, []);

  useEffect(() => {
    if (pathname) {
      window.gtag?.('config', gaId, {
        page_path: pathname + searchParams.toString()
      });
    }
  }, [pathname, searchParams, gaId]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                const isAnalytics = localStorage.getItem('cookie_consent_analytics') === 'true';
                const isMarketing = localStorage.getItem('cookie_consent_marketing') === 'true';

                gtag('consent', 'default', {
                    'analytics_storage': isAnalytics ? 'granted' : 'denied',
                    'ad_storage': isMarketing ? 'granted' : 'denied',
                    'ad_personalization': isMarketing ? 'granted' : 'denied',
                    'ad_user_data': isMarketing ? 'granted' : 'denied'
                });
                
                gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                });
                `
        }}
      />
    </>
  );
};

const GoogleAnalyticsContainer = ({ gaId }: PropsType) => {
  return (
    <Suspense>
      <GoogleAnalytics gaId={gaId} />
    </Suspense>
  );
};

export default GoogleAnalyticsContainer;
