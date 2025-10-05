// ✅ layout.tsx (forbedret canonical-håndtering + SEO-stabilitet)
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
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import CookieBanner from '@/components/cookie-consent';
import { getTextDirectionBasedOnLocale } from '@/lib/helpers';
import process from 'node:process';
import GoogleAnalytics from '@/components/google-analytics';

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
  const baseLangPath = locale === 'en' ? '' : `/${locale}`;

  // ✅ Fjernet trailing slash i canonical for å unngå redirect fra / til (ingen /)
  const canonical = `${basePath}${baseLangPath}`;

  // ✅ Alternates matcher nøyaktig sitemap-struktur (uten / på slutten)
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
      url: canonical, // ✅ Også uten trailing slash
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
      site: canonical,
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

// Resten av koden din (viewport + RootLayout) beholdes uendret
