import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

function checkSessionCookie(req) {
  const sessionCookie = req.cookies.get('session');
  if (!sessionCookie && req.nextUrl.pathname.startsWith('/(id|en)/dashboard/:path*')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export default function middleware(req) {
  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(req);
  if (response) return response;
  return checkSessionCookie(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*', '/(id|en)/dashboard/:path*']
};