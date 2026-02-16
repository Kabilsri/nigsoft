import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db';
import { writeFile } from 'fs/promises';
import { join } from 'path';

function getThankYouEmail(name: string, jobTitle: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Georgia', serif; line-height: 1.8; color: #000; background: #fff; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 1px; }
        .content { background: #fff; padding: 40px 30px; border: 1px solid #e0e0e0; }
        .content p { margin: 15px 0; color: #333; }
        .highlight { background: #f5f5f5; padding: 20px; border-left: 3px solid #000; margin: 25px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>NIGSOFT</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">APPLICATION RECEIVED</p>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for applying for the <strong>${jobTitle}</strong> position at Nigsoft. We have successfully received your application.</p>
          <p>Our recruitment team will carefully review your qualifications and experience. If your profile matches our requirements, we will contact you within the next 5-7 business days to discuss the next steps.</p>
          <div class="highlight">
            <p style="margin: 0 0 10px 0;"><strong>RECRUITMENT PROCESS</strong></p>
            <ul style="margin: 0;">
              <li>Application Review (2-3 business days)</li>
              <li>Initial Screening Call (if shortlisted)</li>
              <li>Technical/HR Interview</li>
              <li>Final Decision</li>
            </ul>
          </div>
          <p>We appreciate your interest in joining our team and wish you the best of luck!</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Nigsoft Recruitment Team</strong></p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Nigsoft. All rights reserved.</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobId = formData.get('jobId') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;
    
    let resumeUrl = null;
    
    // Upload resume to local storage
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const timestamp = Date.now();
      const filename = `${timestamp}-${resume.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const filepath = join(process.cwd(), 'public', 'uploads', 'resumes', filename);
      
      await writeFile(filepath, buffer);
      resumeUrl = `/uploads/resumes/${filename}`;
      console.log('✅ Resume uploaded:', resumeUrl);
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.JOB_MAIL,
        pass: process.env.JOB_MAIL_PASS,
      },
    });

    const mailOptions: any = {
      from: process.env.JOB_MAIL,
      to: process.env.JOB_MAIL,
      subject: `Job Application - ${jobTitle} - ${name}`,
      html: `
        <h3>Job Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <p><strong>Cover Letter:</strong> ${coverLetter || 'N/A'}</p>
      `,
    };

    if (resume && resume.size > 0) {
      mailOptions.attachments = [{
        filename: resume.name,
        content: Buffer.from(await resume.arrayBuffer())
      }];
    }

    await transporter.sendMail(mailOptions);
    
    const thankYouOptions = {
      from: process.env.JOB_MAIL,
      to: email,
      subject: `Application Received - ${jobTitle} at Nigsoft`,
      html: getThankYouEmail(name, jobTitle)
    };

    await transporter.sendMail(thankYouOptions);
    
    // Save to database
    try {
      const applicationId = Date.now().toString();
      await pool.query(
        `INSERT INTO job_applications (id, job_id, job_title, name, email, phone, resume_path, cover_letter, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [applicationId, jobId, jobTitle, name, email, phone, resumeUrl, coverLetter, 'pending']
      );
      console.log('✅ Job application saved to database:', applicationId);
    } catch (dbError) {
      console.error('❌ Database save failed:', dbError);
      // Continue even if DB fails - email was sent
    }
    
    return NextResponse.json({
      success: true,
      message: 'Job application sent successfully'
    });
  } catch (error) {
    console.error('Job email error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to send job application'
    }, { status: 500 });
  }
}
