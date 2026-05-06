import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';

/**
 * Ensures Lemon Squeezy is configured with the API key from environment variables.
 */
export function setupLemonSqueezy() {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  if (!apiKey) {
    throw new Error('LEMONSQUEEZY_API_KEY is not defined in environment variables');
  }

  lemonSqueezySetup({
    apiKey,
    onError: (error) => {
      console.error('Lemon Squeezy API Error:', error);
    },
  });
}
