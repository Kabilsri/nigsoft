import { NextRequest, NextResponse } from 'next/server';
import { getJobs, getJobById, createJob, updateJob, deleteJob } from '@/lib/jobs-db';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';
import { JobSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const job = await getJobById(id);
      if (!job) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
      }
      return NextResponse.json(job);
    }

    const jobs = await getJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('GET jobs error:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!rateLimit(`job-post-${ip}`, 10, 60000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = await request.json();
    
    // Validate input
    const result = JobSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ 
        error: 'Invalid input', 
        details: result.error.issues 
      }, { status: 400 });
    }

    const newJob = await createJob(result.data);
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error('POST job error:', error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!rateLimit(`job-put-${ip}`, 10, 60000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 });
    }

    const body = await request.json();
    const updatedJob = await updateJob(id, body);

    if (!updatedJob) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error('PUT job error:', error);
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!rateLimit(`job-delete-${ip}`, 10, 60000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 });
    }

    const deleted = await deleteJob(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE job error:', error);
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}
