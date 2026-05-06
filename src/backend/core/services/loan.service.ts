import { subscriptionService } from './subscription.service';

/**
 * Service to manage loan-related business logic.
 * Ensures the user has the required permissions and active subscription.
 */
export class LoanService {
  /**
   * Creating a loan is a core feature that requires a premium plan.
   */
  async createLoan(uid: string, loanData: any) {
    const subscription = await subscriptionService.getStatus(uid);

    if (!subscriptionService.hasPremiumAccess(subscription)) {
      throw new Error('Suscripción premium requerida para emitir préstamos.');
    }

    // Business logic for loan generation (interest calculation, etc.)
    console.log(`Processing loan for user ${uid}`, loanData);
    
    return { 
      success: true, 
      loanId: 'temp_id', 
      status: 'pending_approval' 
    };
  }

  async getLoanSummary(uid: string) {
    // Projections logic...
    return { totalLent: 0, activeLoans: 0 };
  }
}

export const loanService = new LoanService();
