import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');

  // Paths that require authentication
  const authPaths = ['/dashboard', '/course', '/settings'];
  
  // Check if the current path requires authentication
  const requiresAuth = authPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (requiresAuth) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Verify JWT token
      await jose.jwtVerify(
        token.value,
        new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret')
      );
      
      return NextResponse.next();
    } catch (error) {
      // Invalid or expired token
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/course/:path*', '/settings/:path*']
};