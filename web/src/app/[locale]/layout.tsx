'use server';

import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from '../providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';
import Footer from '@/components/footer';
import { ThemeProviderProps } from 'next-themes/dist/types';
import {
  basePath,
  getNavItems,
  languages,
  locales,
  siteConfig
} from '@/config/site';
import { unstable_setRequestLocale } from 'next-intl/server';
import Script from 'next/script';
import CookieBanner from '@/components/cookie-consent';
import { getTextDirectionBasedOnLocale } from '@/lib/helpers';
import GoogleAnalytics from '@/components/google-analytics';

// ✅ Flytt miljøvariabler ut av metadata-funksjon
const googleAdsenseAccount = process.env.NEXT_PUBLIC_AD_KEY || '';
const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID || '';

// ✅ Fjern async/await fra generateMetadata (årsaken til crash)
export function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Metadata {
  const baseLangPath = locale === 'en' ? '' : `/${locale}`;
  const canonical = `${basePath}${baseLangPath}`; // uten trailing slash

  // ✅ Bygg alternates uten / på slutten
  const alternates = {
    canonical,
    languages: languages.reduce<Record<string, string>>((result, lang) => {
      const langPrefix = lang.code === 'en' ? '' : `/${lang.code}`;
      result[lang.code] = `${basePath}${langPrefix}`;
      if (lang.map) {
        lang.map.forEach(
          (code) => (result[code] = `${basePath}/${lang.code}`)
        );
      }
      return result;
    }, {}),
    'x-default': `${basePath}`
  };

  return {
    title: {
      default: 'UnderstandMe2 – Explore Your Personality',
      template: '%s - UnderstandMe2'
    },
    description:
      'Discover your Big Five personality traits with UnderstandMe2. Learn more about yourself and improve your well-being.',
    keywords:
      'personality test, big five, psychology, mental health, self-discovery',
    authors: [{ name: 'UnderstandMe2 Team', url: basePath }],
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    },
    metadataBase: new URL(basePath),
    alternates,
    openGraph: {
      type: 'website',
      url: canonical,
      title: 'UnderstandMe2 – Explore Your Personality',
      description:
        'Take the Big Five personality test and understand yourself better.',
      images: {
        url: `${basePath}/og-image.png`,
        alt: 'People comparing personality traits'
      }
    },
    twitter: {
      title: 'UnderstandMe2 – Explore Your Personality',
      card: 'summary_large_image',
      description:
        'Take the Big Five personality test and understand yourself better.',
      site: basePath,
      creator: siteConfig.creator,
      images: {
        url: `${basePath}/og-image.png`,
        alt: 'People comparing personality traits'
      }
    },
    other: {
      'google-adsense-account': googleAdsenseAccount
    }
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const direction = getTextDirectionBasedOnLocale(locale);
  const navItems = await getNavItems({ locale, linkType: 'navItems' });
  const navMenuItems = await getNavItems({ locale, linkType: 'navMenuItems' });
  const footerLinks = await getNavItems({ locale, linkType: 'footerLinks' });

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers
          themeProps={
            { attribute: 'class', defaultTheme: 'light' } as ThemeProviderProps
          }
        >
          <div className='relative flex flex-col h-screen'>
            <Navbar navItems={navItems} navMenuItems={navMenuItems} />
            <main className='container mx-auto max-w-7xl pt-6 px-3 md:px-6 flex-grow flex flex-col'>
              {children}
              <CookieBanner />
            </main>
            <Footer footerLinks={footerLinks} />
          </div>
        </Providers>
        {/* ✅ GA + Ads moved safely below Providers */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseAccount}`}
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <Script src={`${basePath}/sw.js`} strategy='beforeInteractive' />
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
