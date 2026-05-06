import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/backend/auth/auth.service';
import { subscriptionService } from '@/backend/core/services/subscription.service';

/**
 * GET /api/subscription/status
 * Returns the subscription status for the authenticated user.
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

  const subscription = await subscriptionService.getStatus(user.uid);
  const hasAccess = subscriptionService.hasPremiumAccess(subscription);

  return NextResponse.json({
    ...subscription,
    hasAccess,
  });
}
