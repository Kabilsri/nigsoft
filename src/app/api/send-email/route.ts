import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pool from '@/lib/db';
import { createHIMSApplication } from '@/lib/hims-db';

// HTML sanitization function
function sanitizeHtml(input: string): string {
  try {
    if (!input || typeof input !== 'string') return '';
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  } catch (error) {
    return '';
  }
}

// Thank you email templates
function getThankYouEmailContent(formType: string, name: string, jobTitle?: string) {
  const templates = {
    'job-application': `
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
    `,
    'Schedule a Call': `
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
            <p style="margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">CALL SCHEDULED</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for scheduling a call with Nigsoft. We have received your request and our team will contact you shortly.</p>
            <div class="highlight">
              <p style="margin: 0 0 10px 0;"><strong>WHAT TO EXPECT</strong></p>
              <p style="margin: 0;">Our solutions expert will reach out to you within 24 hours to discuss your requirements and how Nigsoft can help transform your business operations.</p>
            </div>
            <p><strong>In the meantime:</strong></p>
            <ul>
              <li>Explore our product portfolio</li>
              <li>Read customer success stories</li>
              <li>Prepare any questions you may have</li>
            </ul>
            <p>We look forward to speaking with you!</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Nigsoft Sales Team</strong></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Nigsoft. All rights reserved.</p>
            <p>Need immediate assistance? Contact us through our website.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    'Book a Demo': `
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
            <p style="margin: 10px 0 0 0; font-size: 14px; letter-spacing: 2px;">DEMO REQUEST CONFIRMED</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in Nigsoft solutions. We're excited to show you how our products can revolutionize your operations!</p>
            <div class="highlight">
              <p style="margin: 0 0 10px 0;"><strong>YOUR DEMO SESSION</strong></p>
              <p style="margin: 0;">Our product specialist will contact you within 24 hours to schedule a personalized demo at your convenience.</p>
            </div>
            <p><strong>What you'll see in the demo:</strong></p>
            <ul>
              <li>Live product walkthrough</li>
              <li>Key features and capabilities</li>
              <li>Customization options</li>
              <li>Integration possibilities</li>
              <li>Pricing and implementation timeline</li>
            </ul>
            <p>Prepare any specific questions or requirements you'd like to discuss during the demo.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Nigsoft Product Team</strong></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Nigsoft. All rights reserved.</p>
            <p>Questions? Email us at info@nigsoft.com</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  return templates[formType as keyof typeof templates] || templates['Schedule a Call'];
}

async function sendThankYouEmail(transporter: any, body: any) {
  try {
    const thankYouMailOptions = {
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: body.formType === 'job-application' 
        ? `Application Received - ${body.jobTitle} at Nigsoft`
        : `Thank You for Contacting Nigsoft`,
      html: getThankYouEmailContent(body.formType, body.name, body.jobTitle)
    };

    await transporter.sendMail(thankYouMailOptions);
  } catch (error) {
    console.error('Failed to send thank you email:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      return NextResponse.json({
        success: false,
        message: 'Invalid JSON in request body'
      }, { status: 400 });
    }
    
    console.log('📧 Received form submission:', body.formType);
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json({
        success: false,
        message: 'Invalid request body'
      }, { status: 400 });
    }
    
    if (!body.name || !body.email || !body.formType) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and formType are required'
      }, { status: 400 });
    }
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        message: 'Email configuration missing'
      }, { status: 500 });
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const getSubject = () => {
      if (body.formType === 'job-application') {
        return `Job Application - ${sanitizeHtml(body.jobTitle)} - ${sanitizeHtml(body.name)}`;
      }
      return `${sanitizeHtml(body.formType)} - ${sanitizeHtml(body.name)}`;
    };

    const getContent = () => {
     let content = `
        <p>
          This email is to inform you that someone has shown interest in Nigsoft products and services.
          Below are the contact details submitted through the website.
        </p>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${sanitizeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(body.email)}</p>
        <p><strong>Phone:</strong> ${sanitizeHtml(body.phone)}</p>
      `;

      if (body.formType === 'hims-application') {
        content += `
          <h3>HIMS Certification Application</h3>
          <p><strong>Qualification:</strong> ${sanitizeHtml(body.qualification)}</p>
          <p><strong>Experience:</strong> ${sanitizeHtml(body.experience)}</p>
          <p><strong>Current Role:</strong> ${sanitizeHtml(body.currentRole)}</p>
          <p><strong>Preferred Batch:</strong> ${sanitizeHtml(body.preferredBatch)}</p>
          <p><strong>Message:</strong> ${sanitizeHtml(body.message || 'N/A')}</p>
        `;
      } else if (body.formType === 'job-application') {
        content += `
          <p><strong>Company:</strong> ${sanitizeHtml(body.company || 'N/A')}</p>
          <h3>Job Application</h3>
          <p><strong>Position:</strong> ${sanitizeHtml(body.jobTitle)}</p>
          <p><strong>Job ID:</strong> ${sanitizeHtml(body.jobId)}</p>
          <p><strong>Cover Letter:</strong> ${sanitizeHtml(body.coverLetter || 'N/A')}</p>
        `;
      } else {
        content += `
          <p><strong>Company:</strong> ${sanitizeHtml(body.company || 'N/A')}</p>
          <h3>Service Details</h3>
          <p><strong>Service:</strong> ${sanitizeHtml(body.service || 'N/A')}</p>
          <p><strong>Product:</strong> ${sanitizeHtml(body.product || 'N/A')}</p>
          <p><strong>Date:</strong> ${sanitizeHtml(body.date || 'N/A')}</p>
          <p><strong>Time:</strong> ${sanitizeHtml(body.time || 'N/A')}</p>
          <p><strong>Message:</strong> ${sanitizeHtml(body.message || 'N/A')}</p>
        `;
      }
      
      return content;
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: getSubject(),
      html: getContent(),
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Admin email sent');
    
    await sendThankYouEmail(transporter, body);
    console.log('✅ Thank you email sent');
    
    // Save to database
    try {
      const submissionId = Date.now().toString();
      console.log('💾 Attempting to save to database, formType:', body.formType);
      
      if (body.formType === 'Schedule a Call' || body.formType === 'schedule-call') {
        console.log('💾 Saving to schedule_calls table...');
        await pool.query(
          'INSERT INTO schedule_calls (id, name, email, phone, company, message, preferred_date, preferred_time, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [submissionId, body.name, body.email, body.phone, body.company || null, body.message || null, body.date || null, body.time || null, 'pending']
        );
        console.log('✅ Schedule call saved to database:', submissionId);
      } else if (body.formType === 'hims-application') {
        console.log('💾 Saving to hims_applications table...');
        await createHIMSApplication({
          full_name: body.fullName,
          email: body.email,
          phone: body.phone,
          qualification: body.qualification,
          experience: body.experience,
          role: body.currentRole,
          batch: body.preferredBatch,
          message: body.message || null
        });
        console.log('✅ HIMS application saved to database');
      } else if (body.formType === 'Book a Demo' || body.formType === 'book-demo') {
        console.log('💾 Saving to book_demos table...');
        await pool.query(
          'INSERT INTO book_demos (id, name, email, phone, company, product, message, preferred_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [submissionId, body.name, body.email, body.phone, body.company || null, body.product || null, body.message || null, body.date || null, 'pending']
        );
        console.log('✅ Book demo saved to database:', submissionId);
      } else {
        console.log('⚠️ Unknown formType, not saving to database:', body.formType);
      }
    } catch (dbError) {
      console.error('❌ Database save failed:', dbError);
      // Continue even if DB fails - email was sent
    }
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to send email'
    }, { status: 500 });
  }
}
