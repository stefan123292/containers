import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ro', 'en'];
const defaultLocale = 'ro';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameHasLocale) {
    const locale = defaultLocale;
    
    // Redirect to include the locale in the URL
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*|images).*)',
  ],
};
