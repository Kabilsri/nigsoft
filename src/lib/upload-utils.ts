// AWS S3 Upload Utility (Optional - for production)
// Install: npm install @aws-sdk/client-s3


import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(
  file: File,
  folder: string = 'products'
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const timestamp = Date.now();
  const filename = `${folder}/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: filename,
    Body: buffer,
    ContentType: file.type,
    ACL: 'public-read',
  });

  await s3Client.send(command);

  return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;
}

// Environment variables needed:
// AWS_REGION=us-east-1
// AWS_ACCESS_KEY_ID=your_access_key
// AWS_SECRET_ACCESS_KEY=your_secret_key
// AWS_S3_BUCKET=your_bucket_name


// Local file upload (current implementation)
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function uploadToLocal(
  file: File,
  folder: string = 'products'
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const timestamp = Date.now();
  const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const filepath = join(process.cwd(), 'public', 'uploads', folder, filename);

  await writeFile(filepath, buffer);

  return `/uploads/${folder}/${filename}`;
}
