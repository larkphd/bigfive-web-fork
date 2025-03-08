import { MetadataRoute } from 'next';
import { basePath, locales } from '@/config/site';
import { getInfo } from '@bigfive-org/results';

const articles = [
  'agreeableness',
  'conscientiousness',
  'neuroticism',
  'extraversion',
  'openness_to_experience',
  'article1_introduction_big_five',
  'article2_improve_the_classroom_environment',
  'article3_team_performance',
  'article4_family_child_mental_health_big_five',
];
const resultLanguages = getInfo().languages.map((l) => l.id);

export default function sitemap(): MetadataRoute.Sitemap {
  const alternatesPageLang = (path: string = '') =>
    locales.reduce((a, v) => ({ ...a, [v]: basePath + `/${v}${path}` }), {});
  const alternatesParamsLang = (path: string = '') =>
    resultLanguages.reduce(
      (a, v) => ({ ...a, [v]: basePath + `${path}&amp;lang=${v}` }),
      {}
    );
  return [
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang()
      }
    },
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang('/result')
      }
    },
    {
      url: `${basePath}/result/67cbfa5261e949470fc1db7e?showExpanded=true`,
      lastModified: new Date(),
      alternates: {
        languages: alternatesParamsLang(
          '/result/67cbfa5261e949470fc1db7e?showExpanded=true'
        )
      }
    },
    {
      url: `${basePath}/compare/W3siaWQiOiI2N2NiZmFlMzYxZTk0OTQ3MGZjMWRiN2YiLCJuYW1lIjoiQ2xpZmYifSx7ImlkIjoiNjdjYmZhNTI2MWU5NDk0NzBmYzFkYjdlIiwibmFtZSI6IkplbmlmZXIifV0`,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang(
          '/compare/W3siaWQiOiI2N2NiZmFlMzYxZTk0OTQ3MGZjMWRiN2YiLCJuYW1lIjoiQ2xpZmYifSx7ImlkIjoiNjdjYmZhNTI2MWU5NDk0NzBmYzFkYjdlIiwibmFtZSI6IkplbmlmZXIifV0'
        )
      }
    },
    {
      url: `${basePath}/test`,
      lastModified: new Date()
      // add lang
    },
    {
      url: `${basePath}/about`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/faq`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/privacy`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/articles`,
      lastModified: new Date()
    },
    ...articles.map((article) => ({
      url: `${basePath}/articles/${article}`,
      lastModified: new Date()
    }))
  ];
}
