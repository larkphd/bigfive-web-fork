import { MetadataRoute } from 'next';
import { basePath, locales } from '@/config/site';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of mainPages) {
    sitemapEntries.push({
      url: `${basePath}${page}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: page === '' ? 1 : 0.8
    });
  }

  for (const article of articles) {
    sitemapEntries.push({
      url: `${basePath}/articles/${article}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    });
  }

  for (const locale of locales) {
    if (locale === 'en') {
      continue;
    }

    for (const page of mainPages) {
      sitemapEntries.push({
        url: `${basePath}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: page === '' ? 0.9 : 0.7
      });
    }

    for (const article of articles) {
      sitemapEntries.push({
        url: `${basePath}/${locale}/articles/${article}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6
      });
    }
  }

  return sitemapEntries;
}
