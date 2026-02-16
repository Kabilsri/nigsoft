import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStorage } from '@/lib/otp-storage';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required' });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store OTP with 5-minute expiry
        otpStorage.set(email, {
            otp,
            expires: Date.now() + 5 * 60 * 1000 // 5 minutes
        });

        // Send OTP via email
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification - OTP',
            html: `
                <h2>Email Verification</h2>
                <p>Your OTP for email verification is: <strong>${otp}</strong></p>
                <p>This OTP will expire in 5 minutes.</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ 
            success: true, 
            message: 'OTP sent successfully'
        });

    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({ success: false, message: 'Failed to send OTP' });
    }
}