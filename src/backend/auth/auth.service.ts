import { adminAuth } from '@/lib/firebase/admin';

export interface AuthUser {
  uid: string;
  email?: string;
  emailVerified: boolean;
}

export class AuthService {
  /**
   * Validates a Firebase ID Token and returns the decoded user information.
   * @param token The Bearer token from the authorization header.
   */
  async verifyToken(token: string): Promise<AuthUser | null> {
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      return {
        uid: decodedToken.uid,
        email: decodedToken.email,
        emailVerified: decodedToken.email_verified || false,
      };
    } catch (error) {
      console.error('Error verifying Firebase token:', error);
      return null;
    }
  }

  /**
   * Extracts the token from the Authorization header.
   */
  extractToken(authHeader: string | null): string | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.split('Bearer ')[1];
  }
}

export const authService = new AuthService();
