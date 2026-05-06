import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/backend/auth/auth.service';
import { subscriptionService } from '@/backend/core/services/subscription.service';

/**
 * POST /api/subscription/checkout
 * Request body: { variantId: string }
 * Generates a checkout URL for Lemon Squeezy.
 */
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authService.extractToken(authHeader);

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await authService.verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    const { variantId } = await request.json();

    if (!variantId) {
      return NextResponse.json({ error: 'variantId is required' }, { status: 400 });
    }

    const checkoutUrl = await subscriptionService.createCheckoutUrl(
      user.uid,
      variantId,
      user.email || ''
    );

    return NextResponse.json({ url: checkoutUrl });
  } catch (error: any) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
