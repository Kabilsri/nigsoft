import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { isAuthenticated, unauthorizedResponse } from '@/lib/auth-helper';

export async function POST(request: NextRequest) {
  // Allow public uploads for job applications (resume files)
  const formData = await request.formData();
  const isPublicUpload = formData.get('public') === 'true';
  
  if (!isPublicUpload && !(await isAuthenticated(request))) {
    return unauthorizedResponse();
  }

  try {
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'products';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/webp', 'image/gif',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    const maxSize = 10 * 1024 * 1024; // 10MB for documents
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filepath = join(process.cwd(), 'public', 'uploads', folder, filename);

    await writeFile(filepath, buffer);

    const url = `/uploads/${folder}/${filename}`;

    return NextResponse.json({ 
      success: true, 
      url,
      filename 
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
