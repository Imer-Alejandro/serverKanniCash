import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/backend/auth/auth.service';
import { organizationService } from '@/backend/organizations/organization.service';

/**
 * POST /api/v1/org/create
 * Creates a new organization for the authenticated user.
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

    const { name } = await request.json();
    if (!name || name.trim().length < 3) {
      return NextResponse.json({ error: 'Nombre de organización inválido' }, { status: 400 });
    }

    const result = await organizationService.createOrganization(user.uid, name);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error creating organization:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
