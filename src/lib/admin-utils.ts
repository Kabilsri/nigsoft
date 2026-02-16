/**
 * Admin Utilities
 * Helper functions for admin panel operations
 */

// File and Image Utilities
export const imageUtils = {
  /**
   * Validate if file is a valid image
   */
  isValidImage: (file: File, maxSize: number = 5): { valid: boolean; error?: string } => {
    const validFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    
    if (!validFormats.includes(file.type)) {
      return { valid: false, error: 'Invalid image format' };
    }
    
    if (file.size > maxSize * 1024 * 1024) {
      return { valid: false, error: `File exceeds ${maxSize}MB limit` };
    }
    
    return { valid: true };
  },

  /**
   * Convert file to base64
   */
  toBase64: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  },

  /**
   * Get image dimensions
   */
  getDimensions: (imageSrc: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = reject;
      img.src = imageSrc;
    });
  },

  /**
   * Compress image
   */
  compress: (canvas: HTMLCanvasElement, quality: number = 0.8): Promise<string> => {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob!);
          reader.onload = () => resolve(reader.result as string);
        },
        'image/jpeg',
        quality
      );
    });
  }
};

// Authentication Utilities
export const authUtils = {
  /**
   * Validate email format
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate password strength
   */
  getPasswordStrength: (password: string): 'weak' | 'medium' | 'strong' => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    if (strength < 2) return 'weak';
    if (strength < 4) return 'medium';
    return 'strong';
  },

  /**
   * Generate secure token
   */
  generateToken: (length: number = 32): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  },

  /**
   * Hash password (basic - use proper hashing in production)
   */
  hashPassword: (password: string): string => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
  }
};

// Content Utilities
export const contentUtils = {
  /**
   * Sanitize HTML content
   */
  sanitizeHTML: (html: string): string => {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  },

  /**
   * Truncate text
   */
  truncate: (text: string, length: number = 100): string => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  },

  /**
   * Generate slug from text
   */
  slugify: (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  /**
   * Extract plain text from HTML
   */
  stripHTML: (html: string): string => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
};

// Data Utilities
export const dataUtils = {
  /**
   * Format file size
   */
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  },

  /**
   * Format date
   */
  formatDate: (date: string | Date, format: string = 'MMM DD, YYYY'): string => {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const replacements: { [key: string]: string } = {
      'YYYY': d.getFullYear().toString(),
      'MM': String(d.getMonth() + 1).padStart(2, '0'),
      'MMM': months[d.getMonth()],
      'DD': String(d.getDate()).padStart(2, '0'),
      'HH': String(d.getHours()).padStart(2, '0'),
      'mm': String(d.getMinutes()).padStart(2, '0'),
      'ss': String(d.getSeconds()).padStart(2, '0')
    };

    let formatted = format;
    for (const [key, value] of Object.entries(replacements)) {
      formatted = formatted.replace(new RegExp(key, 'g'), value);
    }
    return formatted;
  },

  /**
   * Deep clone object
   */
  deepClone: <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Merge objects
   */
  merge: <T extends object>(target: T, source: Partial<T>): T => {
    return { ...target, ...source };
  },

  /**
   * Sort array of objects
   */
  sort: <T extends object>(
    arr: T[],
    key: keyof T,
    order: 'asc' | 'desc' = 'asc'
  ): T[] => {
    return [...arr].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }
};

// API Utilities
export const apiUtils = {
  /**
   * Make authenticated API call
   */
  fetchWithAuth: async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('nigsoft-admin-token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` })
    };

    const response = await fetch(url, {
      ...options,
      headers
    });

    if (response.status === 401) {
      // Token expired, redirect to login
      localStorage.removeItem('nigsoft-admin-token');
      localStorage.removeItem('nigsoft-admin-session');
      window.location.href = '/admin';
    }

    return response.json();
  },

  /**
   * Retry failed requests
   */
  retryFetch: async (
    url: string,
    options: RequestInit = {},
    maxRetries: number = 3
  ) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (response.ok) return await response.json();
      } catch (err) {
        if (i === maxRetries - 1) throw err;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }
};

// Validation Utilities
export const validationUtils = {
  /**
   * Validate form data
   */
  validateForm: (
    data: Record<string, any>,
    rules: Record<string, ((value: any) => string | null)[]>
  ): Record<string, string> => {
    const errors: Record<string, string> = {};

    for (const [field, fieldRules] of Object.entries(rules)) {
      for (const rule of fieldRules) {
        const error = rule(data[field]);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    }

    return errors;
  },

  /**
   * Common validation rules
   */
  rules: {
    required: (value: any) => !value ? 'This field is required' : null,
    minLength: (min: number) => (value: string) =>
      value.length < min ? `Minimum length is ${min}` : null,
    maxLength: (max: number) => (value: string) =>
      value.length > max ? `Maximum length is ${max}` : null,
    email: (value: string) =>
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email' : null,
    url: (value: string) =>
      !/^https?:\/\/.+/.test(value) ? 'Invalid URL' : null,
    number: (value: any) =>
      isNaN(value) ? 'Must be a number' : null,
    phone: (value: string) =>
      !/^\d{10,}$/.test(value.replace(/\D/g, '')) ? 'Invalid phone number' : null
  }
};

// Storage Utilities
export const storageUtils = {
  /**
   * Get item from localStorage with fallback
   */
  get: <T>(key: string, fallback: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  },

  /**
   * Set item in localStorage
   */
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Storage error:', err);
    }
  },

  /**
   * Remove item from localStorage
   */
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  /**
   * Clear all localStorage
   */
  clear: (): void => {
    localStorage.clear();
  },

  /**
   * Check if key exists
   */
  has: (key: string): boolean => {
    return localStorage.getItem(key) !== null;
  }
};

export default {
  imageUtils,
  authUtils,
  contentUtils,
  dataUtils,
  apiUtils,
  validationUtils,
  storageUtils
};
