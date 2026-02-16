import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const [rows] = await pool.query(
      'SELECT * FROM schedule_calls ORDER BY created_at DESC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching schedule calls:', error);
    return NextResponse.json({ error: 'Failed to fetch schedule calls' }, { status: 500 });
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

    await pool.query('UPDATE schedule_calls SET status = ? WHERE id = ?', [status, id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating schedule call:', error);
    return NextResponse.json({ error: 'Failed to update schedule call' }, { status: 500 });
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

    await pool.query('DELETE FROM schedule_calls WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting schedule call:', error);
    return NextResponse.json({ error: 'Failed to delete schedule call' }, { status: 500 });
  }
}
