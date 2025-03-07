import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from '../providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';
import Footer from '@/components/footer';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { GoogleAnalytics } from '@next/third-parties/google';
import { basePath, getNavItems, locales, siteConfig } from '@/config/site';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CookieBanner from '@/components/cookie-consent';
import { getTextDirectionBasedOnLocale } from '@/lib/helpers';
import process from 'node:process';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'frontpage' });
  const s = await getTranslations({ locale, namespace: 'seo' });
  const path = '/';
  const canonicalUrl = `${basePath}/${locale}${path}`;

  const alternates = {
    canonical: `${basePath}/${locale}${path}`,
    languages: {
      ar: `${basePath}/ar`,
      'da-DK': `${basePath}/da`,
      'de-DE': `${basePath}/de`,
      'es-ES': `${basePath}/es`,
      'fi-FI': `${basePath}/fi`,
      hi: `${basePath}/hi`,
      'id-ID': `${basePath}/id`,
      'is-IS': `${basePath}/is`,
      'it-IT': `${basePath}/it`,
      'ja-JP': `${basePath}/ja`,
      'nb-NO': `${basePath}/no`,
      'pl-PL': `${basePath}/pl`,
      'pt-BR': `${basePath}/pt`,
      'ru-RU': `${basePath}/ru`,
      'sv-SE': `${basePath}/sv`,
      'th-TH': `${basePath}/th`,
      'uk-UA': `${basePath}/uk`,
      'zh-CN': `${basePath}/zh`
    },
    'x-default': `${basePath}/en`
  };

  return {
    title: {
      default: t('seo.title'),
      template: `%s - ${t('seo.title')}`
    },
    description: t('seo.description'),
    keywords: s('keywords'),
    authors: [{ name: 'Reborn from github', url: basePath }],
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    },
    metadataBase: new URL(basePath),
    alternates,
    openGraph: {
      type: 'website',
      url: basePath,
      title: t('seo.title'),
      description: t('seo.description'),
      images: {
        url: `${basePath}/og-image.png`,
        alt: 'People comparing personality tests'
      }
    },
    twitter: {
      title: t('seo.title'),
      card: 'summary_large_image',
      description: t('seo.description'),
      site: basePath,
      creator: siteConfig.creator,
      images: {
        url: `${basePath}/og-image.png`,
        alt: 'People comparing personality tests'
      }
    },
    other: {
      'google-adsense-account': process.env.NEXT_PUBLIC_AD_KEY || ''
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

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const gaId = process.env.NEXT_PUBLIC_ANALYTICS_ID || '';
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
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_AD_KEY}`}
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />

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
        <Script src={`${basePath}/sw.js`} strategy='beforeInteractive' />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
