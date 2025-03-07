import { getHrefLangUrls } from '@/config/site';
import { usePathname } from 'next/navigation';

export const HrefLang = () => {
  const pathname = usePathname();
  const path = pathname.split('/').slice(2).join('/');
  const hrefLangUrls = getHrefLangUrls('/' + path);

  return (
    <>
      <link
        rel='alternate'
        href={`${hrefLangUrls[0].href}`}
        hrefLang='x-default'
      />

      {hrefLangUrls.map((url) => (
        <>
          <link
            key={url.hrefLang}
            rel='alternate'
            href={url.href}
            hrefLang={url.hrefLang}
          />
          {url.additionalTags?.map((tag) => (
            <link
              key={tag.hrefLang}
              rel='alternate'
              href={tag.href}
              hrefLang={tag.hrefLang}
            />
          ))}
        </>
      ))}
    </>
  );
};
