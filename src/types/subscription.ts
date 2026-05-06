export type SubscriptionStatus = 'active' | 'past_due' | 'canceled' | 'expired' | 'inactive';

export interface UserSubscription {
  uid: string;
  customerId?: string;
  subscriptionId?: string;
  variantId?: string;
  status: SubscriptionStatus;
  renewsAt?: string;
  endsAt?: string;
  trialEndsAt?: string;
  isPaused: boolean;
  updatedAt: string;
}

export interface PlanDefinition {
  id: string;
  name: string;
  variantId: string;
  features: string[];
}
