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
    
    // 1. Create the new URL object first
    const url = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
    
    // 2. COPY THE QUERY PARAMETERS (This fixes your GA4 issue)
    url.search = request.nextUrl.search;

    // 3. Return the redirect using the new URL object
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*|images).*)',
  ],
};