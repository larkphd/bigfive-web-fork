interface ISetGaConsentParams {
  isAnalytics: boolean;
  isMarketing: boolean;
}

export function setGAConsent({
  isAnalytics,
  isMarketing
}: ISetGaConsentParams) {
  localStorage.setItem('cookie_consent_analytics', isAnalytics.toString());
  localStorage.setItem('cookie_consent_marketing', isMarketing.toString());
  window.gtag?.('consent', 'update', {
    analytics_storage: isAnalytics ? 'granted' : 'denied',
    ad_storage: isMarketing ? 'granted' : 'denied'
  });
}

interface IGAConsentLSResult {
  isAnalytics: boolean | null;
  isMarketing: boolean | null;
}

export function getGAConsentFromLS(): IGAConsentLSResult {
  const analyticsCookieConsent = localStorage.getItem(
    'cookie_consent_analytics'
  );
  const marketingCookieConsent = localStorage.getItem(
    'cookie_consent_marketing'
  );

  return {
    isAnalytics: analyticsCookieConsent
      ? analyticsCookieConsent === 'true'
      : null,
    isMarketing: marketingCookieConsent
      ? marketingCookieConsent === 'true'
      : null
  };
}
