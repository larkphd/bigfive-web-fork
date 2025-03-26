import { Metadata } from 'next';
import { basePath, languages } from '@/config/site';

export function generatePageMetadata({
  locale,
  pagePath,
  additionalMetadata = {}
}: {
  locale: string;
  pagePath: string;
  additionalMetadata?: Record<string, any>;
}): Metadata {
  const path = pagePath.startsWith('/') ? pagePath : `/${pagePath}`;
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;
  const canonical = `${basePath}${canonicalPath}/`;

  const alternates = {
    canonical,
    languages: languages.reduce<Record<string, string>>((result, lang) => {
      const langPath = lang.code === 'en' ? path : `/${lang.code}${path}`;
      result[lang.code] = `${basePath}${langPath}/`;

      if (lang.map) {
        lang.map.forEach(
          (code) => (result[code] = `${basePath}/${lang.code}${path}/`)
        );
      }

      return result;
    }, {}),
    'x-default': `${basePath}/en${path}/`
  };

  return {
    alternates,
    ...additionalMetadata
  };
}
