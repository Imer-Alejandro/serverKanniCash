import { subscriptionService } from './subscription.service';

/**
 * Service to manage client-related business logic.
 * Enforces subscription rules before performing sensitive operations.
 */
export class ClientService {
  /**
   * Example: Creating a client requires an active premium subscription.
   */
  async createClient(uid: string, data: any) {
    const subscription = await subscriptionService.getStatus(uid);
    
    if (!subscriptionService.hasPremiumAccess(subscription)) {
      throw new Error('Se requiere una suscripción activa para gestionar clientes.');
    }

    // Logic to save to Firestore would go here (using a repository)
    console.log(`Creating client for user ${uid}`, data);
    return { success: true, message: 'Cliente creado correctamente.' };
  }

  async listClients(uid: string) {
    // List logic...
    return [];
  }
}

export const clientService = new ClientService();
