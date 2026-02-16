import { NextRequest, NextResponse } from 'next/server';
import { otpStorage } from '@/lib/otp-storage';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json({ success: false, message: 'Email and OTP are required' });
        }

        const storedData = otpStorage.get(email);

        if (!storedData) {
            return NextResponse.json({ success: false, message: 'OTP not found or expired' });
        }

        // Check if OTP is expired
        if (Date.now() > storedData.expires) {
            otpStorage.delete(email);
            return NextResponse.json({ success: false, message: 'OTP has expired' });
        }

        // Use timing-safe comparison for OTP
        let otpMatch = false;
        try {
            otpMatch = crypto.timingSafeEqual(
                Buffer.from(storedData.otp, 'utf8'),
                Buffer.from(otp, 'utf8')
            );
        } catch (error) {
            return NextResponse.json({ success: false, message: 'Invalid OTP format' });
        }
        
        if (!otpMatch) {
            return NextResponse.json({ success: false, message: 'Invalid OTP' });
        }

        // OTP is valid, remove it from storage
        otpStorage.delete(email);

        return NextResponse.json({ 
            success: true, 
            message: 'Email verified successfully' 
        });

    } catch (error) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json({ success: false, message: 'Failed to verify OTP' });
    }
}