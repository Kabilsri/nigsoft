// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(identifier: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (record.count >= limit) {
    // Rate limit exceeded
    return false;
  }

  // Increment count
  record.count++;
  return true;
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);
