// sitemap.ts — optimized for SEO + no redirect issues

import { MetadataRoute } from 'next';
import { basePath, locales } from '@/config/site';

// ✅ Sørg for at basePath i config IKKE har trailing slash!
// f.eks. export const basePath = 'https://understandme2.com';

const mainPages = [
  '',
  '/test',
  '/result',
  '/compare',
  '/articles',
  '/about',
  '/privacy',
  '/faq'
];

const articles = [
  'agreeableness',
  'conscientiousness',
  'neuroticism',
  'extraversion',
  'openness-to-experience',
  'article1-introduction-big-five',
  'article2-improve-the-classroom-environment',
  'article3-team-performance',
  'article4-family-child-mental-health-big-five'
];

// ✅ Sett en fast "lastModified" dato for stabilitet (unngår at Google ser alt som nytt hver gang)
const lastUpdated = new Date('2024-10-01'); // endre når du faktisk oppdaterer innhold

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Main pages
  for (const page of mainPages) {
    sitemapEntries.push({
      url: `${basePath}${page}`,
      lastModified: lastUpdated,
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8
    });
  }

  // Articles
  for (const article of articles) {
    sitemapEntries.push({
      url: `${basePath}/articles/${article}`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7
    });
  }

  // Localized versions (if you use i18n)
  for (const locale of locales) {
    if (locale === 'en') continue; // en = default

    for (const page of mainPages) {
      sitemapEntries.push({
        url: `${basePath}/${locale}${page}`,
        lastModified: lastUpdated,
        changeFrequency: 'monthly',
        priority: page === '' ? 0.9 : 0.7
      });
    }

    for (const article of articles) {
      sitemapEntries.push({
        url: `${basePath}/${locale}/articles/${article}`,
        lastModified: lastUpdated,
        changeFrequency: 'monthly',
        priority: 0.6
      });
    }
  }

  return sitemapEntries;
}
