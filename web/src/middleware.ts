import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';
import { locales } from './config/site';
import { NextRequest, NextResponse } from 'next/server';

const middleware = (request: NextRequest) => {
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngine =
    userAgent.includes('Googlebot') ||
    userAgent.includes('bingbot') ||
    userAgent.includes('YandexBot') ||
    userAgent.includes('DuckDuckBot');

  if (isSearchEngine) {
    return NextResponse.next();
  }

  const intlMiddleware = createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en'
  });

  return intlMiddleware(request);
};

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|ar|de|es|fr|id|it|no|pt|sv|uk|da|fi|hi|is|ja|pl|ru|th|zh)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
