import { adminDb } from '@/lib/firebase/admin';
import { UserSubscription } from '@/types/subscription';

export class SubscriptionRepository {
  private readonly collection = 'subscriptions';

  /**
   * Retrieves the subscription data for a specific user.
   */
  async getByUid(uid: string): Promise<UserSubscription | null> {
    const doc = await adminDb.collection(this.collection).doc(uid).get();
    if (!doc.exists) return null;
    return doc.data() as UserSubscription;
  }

  /**
   * Updates or creates the subscription data for a user.
   */
  async upsert(subscription: UserSubscription): Promise<void> {
    await adminDb
      .collection(this.collection)
      .doc(subscription.uid)
      .set(subscription, { merge: true });
  }

  /**
   * Finds a subscription by the Lemon Squeezy subscription ID.
   * Useful for webhooks where we only have the external ID.
   */
  async getBySubscriptionId(subscriptionId: string): Promise<UserSubscription | null> {
    const query = await adminDb
      .collection(this.collection)
      .where('subscriptionId', '==', subscriptionId)
      .limit(1)
      .get();

    if (query.empty) return null;
    return query.docs[0].data() as UserSubscription;
  }
}

export const subscriptionRepository = new SubscriptionRepository();
