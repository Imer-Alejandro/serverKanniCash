import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/backend/auth/auth.service';
import { organizationService } from '@/backend/organizations/organization.service';

/**
 * POST /api/v1/org/join
 * Joins an existing organization using a join code.
 */
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authService.extractToken(authHeader);

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await authService.verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { joinCode } = await request.json();
    if (!joinCode) {
      return NextResponse.json({ error: 'Código de invitación requerido' }, { status: 400 });
    }

    const result = await organizationService.joinOrganization(user.uid, joinCode);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error joining organization:', error);
    return NextResponse.json({ error: error.message || 'Error al unirse a la organización' }, { status: 400 });
  }
}
