import { adminDb, adminAuth } from '@/lib/firebase/admin';
import { generateSimpleJoinCode } from '@/lib/utils/org';

export class OrganizationService {
  /**
   * Creates a new organization and sets the user as admin.
   */
  async createOrganization(adminUid: string, name: string) {
    const joinCode = generateSimpleJoinCode();
    
    const orgRef = adminDb.collection('organizations').doc();
    const orgId = orgRef.id;

    const timestamp = new Date().toISOString();

    await orgRef.set({
      id: orgId,
      name,
      joinCode,
      adminUid,
      plan: 'basic',
      createdAt: timestamp,
      updatedAt: timestamp,
      employeeCount: 1,
    });

    // Set custom claims for the admin
    await adminAuth.setCustomUserClaims(adminUid, {
      orgId,
      role: 'admin',
      plan: 'basic'
    });

    // Update user profile in Firestore
    await adminDb.collection('users').doc(adminUid).set({
      uid: adminUid,
      orgId,
      role: 'admin',
      updatedAt: timestamp,
      permissions: {
        'loans.create': true,
        'loans.edit': true,
        'loans.delete': true,
        'payments.register': true,
        'payments.void': true,
        'reports.view': true,
        'clients.manage': true,
        'settings.manage': true,
        'users.manage': true
      }
    }, { merge: true });

    return { orgId, joinCode };
  }

  /**
   * Links a user to an organization using a join code.
   */
  async joinOrganization(userUid: string, joinCode: string) {
    const orgs = await adminDb.collection('organizations')
      .where('joinCode', '==', joinCode.toUpperCase().trim())
      .limit(1)
      .get();
    
    if (orgs.empty) {
      throw new Error('Código de invitación inválido');
    }

    const orgDoc = orgs.docs[0];
    const orgData = orgDoc.data();
    const orgId = orgDoc.id;

    // Check quota based on plan
    const plan = orgData.plan || 'basic';
    const maxEmployees = plan === 'enterprise' ? 18 : (plan === 'standard' ? 3 : 1);
    
    if (orgData.employeeCount >= maxEmployees) {
      throw new Error(`Límite de empleados alcanzado para el plan ${plan}`);
    }

    const timestamp = new Date().toISOString();

    // Join user
    await adminAuth.setCustomUserClaims(userUid, {
      orgId,
      role: 'employee',
      plan
    });

    await adminDb.collection('users').doc(userUid).set({
      uid: userUid,
      orgId,
      role: 'employee',
      updatedAt: timestamp,
      permissions: {
        'payments.register': true, // Basic default permission
        'clients.view': true,
        'loans.view': true
      }
    }, { merge: true });

    // Increment employee count
    // Note: In production use a transaction if high concurrency is expected
    await orgDoc.ref.update({
      employeeCount: orgData.employeeCount + 1,
      updatedAt: timestamp
    });

    return { orgId, name: orgData.name };
  }

  /**
   * Updates an employee's permissions (Admin only).
   */
  async updatePermissions(adminUid: string, targetUid: string, permissions: Record<string, boolean>) {
    const adminUser = await adminDb.collection('users').doc(adminUid).get();
    const targetUser = await adminDb.collection('users').doc(targetUid).get();

    if (!adminUser.exists || adminUser.data()?.role !== 'admin') {
      throw new Error('No autorizado');
    }

    if (!targetUser.exists || targetUser.data()?.orgId !== adminUser.data()?.orgId) {
      throw new Error('El usuario no pertenece a tu organización');
    }

    await adminDb.collection('users').doc(targetUid).update({
      permissions,
      updatedAt: new Date().toISOString()
    });

    return { success: true };
  }
}

export const organizationService = new OrganizationService();
