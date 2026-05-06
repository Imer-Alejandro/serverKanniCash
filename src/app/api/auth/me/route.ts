import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/backend/auth/auth.service';

/**
 * GET /api/auth/me
 * Returns the current authenticated user's information.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authService.extractToken(authHeader);

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await authService.verifyToken(token);

  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  // Verification logic: require email verification
  if (!user.emailVerified) {
    return NextResponse.json(
      { error: 'Email not verified', email: user.email },
      { status: 403 }
    );
  }

  return NextResponse.json({
    uid: user.uid,
    email: user.email,
    authenticated: true,
  });
}
