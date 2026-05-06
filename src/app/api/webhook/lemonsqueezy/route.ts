import { NextRequest, NextResponse } from 'next/server';
import { webhookService } from '@/backend/webhooks/webhook.service';

/**
 * POST /api/webhook/lemonsqueezy
 * Handles incoming webhooks from Lemon Squeezy to keep subscription data in sync.
 */
export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-signature') || '';

  // 1. Validate signature
  if (!webhookService.verifySignature(rawBody, signature)) {
    console.error('Invalid Lemon Squeezy webhook signature');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  try {
    const payload = JSON.parse(rawBody);

    // 2. Process event
    await webhookService.processEvent(payload);

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error processing Lemon Squeezy webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
