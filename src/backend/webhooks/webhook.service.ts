import crypto from 'crypto';
import { subscriptionRepository } from '../core/repositories/subscription.repository';
import { UserSubscription, SubscriptionStatus } from '@/types/subscription';

export class WebhookService {
  /**
   * Verifies that the webhook request came from Lemon Squeezy.
   */
  verifySignature(rawBody: string, signature: string): boolean {
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(rawBody).digest('hex');
    
    try {
      return crypto.timingSafeEqual(
        Buffer.from(digest, 'hex'),
        Buffer.from(signature, 'hex')
      );
    } catch (error) {
      return false;
    }
  }

  /**
   * Routes the event to the appropriate handler.
   */
  async processEvent(payload: any) {
    const eventName = payload.meta.event_name;
    const data = payload.data;
    const customData = payload.meta.custom_data;

    console.log(`Processing Lemon Squeezy event: ${eventName}`);

    switch (eventName) {
      case 'subscription_created':
      case 'subscription_updated':
      case 'subscription_cancelled':
      case 'subscription_resumed':
      case 'subscription_expired':
        await this.handleSubscriptionChange(data, customData);
        break;
      default:
        console.log(`Unhandled event type: ${eventName}`);
    }
  }

  /**
   * Updates the subscription projection in Firestore.
   */
  private async handleSubscriptionChange(data: any, customData?: any) {
    const attributes = data.attributes;
    const subscriptionId = data.id;
    
    // Try to get UID from custom data or existing record
    let uid = customData?.user_id;
    if (!uid) {
      const existing = await subscriptionRepository.getBySubscriptionId(subscriptionId);
      uid = existing?.uid;
    }

    if (!uid) {
      console.warn(`No UID found for subscription ${subscriptionId}`);
      return;
    }

    const subscription: UserSubscription = {
      uid,
      subscriptionId: subscriptionId.toString(),
      customerId: attributes.customer_id.toString(),
      variantId: attributes.variant_id.toString(),
      status: attributes.status as SubscriptionStatus,
      renewsAt: attributes.renews_at,
      endsAt: attributes.ends_at,
      trialEndsAt: attributes.trial_ends_at,
      isPaused: attributes.pause !== null,
      updatedAt: new Date().toISOString(),
    };

    await subscriptionRepository.upsert(subscription);
    console.log(`Subscription ${subscriptionId} updated for user ${uid}`);
  }
}

export const webhookService = new WebhookService();
