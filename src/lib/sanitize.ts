// Input sanitization utilities to prevent XSS and injection attacks

export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
    .slice(0, 1000); // Limit length
}

export function sanitizeHTML(html: string): string {
  if (!html) return '';
  
  // Remove script tags and event handlers
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .trim();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validateRating(rating: number): boolean {
  return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

export function sanitizeReviewData(data: any) {
  return {
    author: sanitizeInput(data.author || ''),
    role: sanitizeInput(data.role || ''),
    comment: sanitizeInput(data.comment || ''),
    rating: validateRating(data.rating) ? data.rating : 5,
    tabId: sanitizeInput(data.tabId || ''),
    productId: data.productId ? sanitizeInput(data.productId) : null,
    doctorImage: data.doctorImage ? sanitizeInput(data.doctorImage) : undefined
  };
}
