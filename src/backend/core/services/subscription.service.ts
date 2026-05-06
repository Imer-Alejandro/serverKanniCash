import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
import { setupLemonSqueezy } from '@/lib/lemonsqueezy/client';
import { subscriptionRepository } from '../repositories/subscription.repository';
import { UserSubscription, SubscriptionStatus } from '@/types/subscription';

export class SubscriptionService {
  constructor() {
    setupLemonSqueezy();
  }

  /**
   * Returns the current subscription status for a user.
   */
  async getStatus(uid: string): Promise<UserSubscription> {
    const sub = await subscriptionRepository.getByUid(uid);
    if (!sub) {
      return {
        uid,
        status: 'inactive',
        isPaused: false,
        updatedAt: new Date().toISOString(),
      };
    }
    return sub;
  }

  /**
   * Generates a Lemon Squeezy checkout URL for a specific plan variant.
   */
  async createCheckoutUrl(uid: string, variantId: string, email: string): Promise<string> {
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    if (!storeId) {
      throw new Error('LEMONSQUEEZY_STORE_ID is not configured');
    }

    const { data, error } = await createCheckout(storeId, variantId, {
      checkoutData: {
        email,
        custom: {
          user_id: uid,
        },
      },
      productOptions: {
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
      },
    });

    if (error) {
      console.error('Lemon Squeezy checkout error:', error);
      throw new Error('Could not create checkout session');
    }

    return data?.data.attributes.url;
  }

  /**
   * Logic to decide if a user has premium access based on their subscription status.
   */
  hasPremiumAccess(subscription: UserSubscription): boolean {
    const allowedStatuses: SubscriptionStatus[] = ['active', 'past_due', 'canceled'];
    
    // Even if canceled, they might have time left until endsAt
    if (subscription.status === 'canceled') {
      if (subscription.endsAt) {
        return new Date(subscription.endsAt) > new Date();
      }
      return false;
    }

    return allowedStatuses.includes(subscription.status);
  }
}

export const subscriptionService = new SubscriptionService();
