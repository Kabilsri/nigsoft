// Shared OTP storage for development (use Redis or database in production)
export const otpStorage = new Map<string, { otp: string; expires: number }>();