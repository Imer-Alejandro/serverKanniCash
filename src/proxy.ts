import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Global proxy to protect API routes.
 * Webhooks are excluded from authentication checks.
 * This replaces the deprecated middleware convention.
 */
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /api routes except webhooks
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/webhook')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
