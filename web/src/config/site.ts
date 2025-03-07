import { getTranslations } from 'next-intl/server';

export const basePath = 'https://understandme2.com';

export const getHrefLangUrls = (path: string, currentLocale?: string) => {
  const urls = languages.map((lang) => {
    const langUrl = `${basePath}/${lang.code}${path}`;
    return {
      href: langUrl,
      hrefLang: lang.code,
      ...(lang.map && {
        additionalTags: lang.map.map((code) => ({
          href: langUrl,
          hrefLang: code
        }))
      })
    };
  });

  if (!currentLocale || currentLocale === 'en') {
    urls.push({
      href: `${basePath}/en${path}`,
      hrefLang: 'x-default'
    });
  }

  return urls;
};

export const supportEmail = 'contact@understandme2.com';

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
  map?: string[];
};

export const languages: Language[] = [
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] },
  { code: 'ar', name: 'Arabic', map: ['ar-sa'] },
  { code: 'de', name: 'German', countryCode: 'de', map: ['de-DE'] },
  {
    code: 'es',
    name: 'Spanish',
    countryCode: 'es',
    map: ['es-ES', 'es-US', 'es-MX', 'ca']
  },
  { code: 'fr', name: 'French', countryCode: 'fr', map: ['fr-FR', 'fr-CA'] },
  { code: 'id', name: 'Indonesian', countryCode: 'id' },
  { code: 'it', name: 'Italian', countryCode: 'it', map: ['it-IT'] },
  { code: 'no', name: 'Norwegian', countryCode: 'no', map: ['nb', 'nn'] },
  {
    code: 'pt',
    name: 'Portuguese',
    countryCode: 'pt',
    map: ['pt-BR', 'pt-PT']
  },
  { code: 'sv', name: 'Swedish', countryCode: 'se' },
  { code: 'uk', name: 'Ukrainian', countryCode: 'ua' },
  { code: 'da', name: 'Danish', countryCode: 'dk' },
  { code: 'fi', name: 'Finnish', countryCode: 'fi' },
  { code: 'hi', name: 'Hindi', countryCode: 'in' },
  { code: 'is', name: 'Icelandic', countryCode: 'is' },
  { code: 'ja', name: 'Japanese', countryCode: 'jp' },
  { code: 'pl', name: 'Polish', countryCode: 'pl' },
  { code: 'ru', name: 'Russian', countryCode: 'ru' },
  { code: 'th', name: 'Thai', countryCode: 'th' },
  {
    code: 'zh',
    name: 'Chinese',
    countryCode: 'cn',
    map: ['zh-CN', 'zh-Hans', 'zh-Hant']
  }
];

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
  name: 'Understand Me with the methode of big five Personality Test',
  creator: 'Reborn from github',
  description:
    'Understand yourself to become a better version - and to know how you are.',
  navItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'result',
      href: '/result'
    },
    {
      label: 'compare',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'about',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'see_results',
      href: '/result'
    },
    {
      label: 'compare_with',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'privacy',
      href: '/privacy'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ],
  footerLinks: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'privacy',
      href: '/privacy'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ]
};

export const getNavItems = async ({
  locale,
  linkType
}: {
  locale: string;
  linkType: 'navItems' | 'navMenuItems' | 'footerLinks';
}) => {
  const t = await getTranslations({ locale, namespace: 'toolbar' });
  return siteConfig[linkType].map((link) => ({
    label: t(`${link.label}`),
    href: link.href
  }));
};
