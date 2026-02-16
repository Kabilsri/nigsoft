import { NextRequest, NextResponse } from 'next/server';
import { getHIMSApplications, updateHIMSApplicationStatus, deleteHIMSApplication } from '@/lib/hims-db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const applications = await getHIMSApplications();
    return NextResponse.json(applications);
  } catch (error) {
    console.error('GET hims applications error:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Application ID required' }, { status: 400 });
    }

    const body = await request.json();
    const updated = await updateHIMSApplicationStatus(id, body.status);

    if (!updated) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PUT hims application error:', error);
    return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Application ID required' }, { status: 400 });
    }

    const deleted = await deleteHIMSApplication(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE hims application error:', error);
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 });
  }
}
