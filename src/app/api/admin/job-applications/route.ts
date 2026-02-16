import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const [rows] = await pool.query(
      'SELECT * FROM job_applications ORDER BY created_at DESC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching job applications:', error);
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
    const { status } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await pool.query('UPDATE job_applications SET status = ? WHERE id = ?', [status, id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating application:', error);
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
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await pool.query('DELETE FROM job_applications WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting application:', error);
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 });
  }
}
