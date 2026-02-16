import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log API requests
  if (request.nextUrl.pathname.startsWith('/api/') && request.method !== 'GET') {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    console.log('[API REQUEST]', {
      method: request.method,
      path: request.nextUrl.pathname,
      ip,
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString()
    });
  }

  // Protect /admin routes (except login page)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to admin login page
    if (request.nextUrl.pathname === '/admin' || request.nextUrl.pathname === '/admin/') {
      return NextResponse.next();
    }

    const adminSession = request.cookies.get('admin-session');
    
    if (!adminSession) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      const sessionData = JSON.parse(adminSession.value);
      
      // Check if session is expired (5 minutes)
      const sessionTime = new Date(sessionData.timestamp).getTime();
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;
      
      if (now - sessionTime > fiveMinutes || !sessionData.isAuthenticated) {
        // Session expired, redirect to home
        const response = NextResponse.redirect(new URL('/', request.url));
        response.cookies.delete('admin-session');
        return response;
      }
    } catch (error) {
      // Invalid session, redirect to home
      const response = NextResponse.redirect(new URL('/', request.url));
      response.cookies.delete('admin-session');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
