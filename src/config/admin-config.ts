/**
 * Admin Panel Configuration
 * Customize admin system settings here
 */

export const ADMIN_CONFIG = {
  // Authentication Settings
  AUTH: {
    // Session timeout in minutes
    SESSION_TIMEOUT: 30,

    // Time to show warning before logout (in minutes)
    WARNING_TIME: 5,

    // Token refresh interval (in minutes)
    TOKEN_REFRESH_INTERVAL: 15,

    // Remember session across browser close
    REMEMBER_SESSION: true,

    // Admin credentials (change in production!)
    CREDENTIALS: {
      EMAIL: process.env.ADMIN_EMAIL,
      PASSWORD: process.env.ADMIN_PASSWORD
    }
  },

  // Image Upload Settings
  IMAGE_UPLOAD: {
    // Maximum file size in MB
    MAX_SIZE: 5,

    // Allowed image formats
    ALLOWED_FORMATS: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],

    // Auto-compress images
    AUTO_COMPRESS: true,

    // Compression quality (0-1)
    COMPRESSION_QUALITY: 0.8,

    // Generate thumbnail
    GENERATE_THUMBNAIL: true,

    // Thumbnail size (width x height)
    THUMBNAIL_SIZE: { width: 200, height: 200 }
  },

  // Content Settings
  CONTENT: {
    // Content categories
    CATEGORIES: [
      'general',
      'hero',
      'products',
      'team',
      'testimonials',
      'services'
    ],

    // Content types
    TYPES: ['text', 'image', 'html', 'video'],

    // Default content status (draft/published)
    DEFAULT_STATUS: 'draft',

    // Enable version control
    ENABLE_VERSIONING: false,

    // Max versions per content
    MAX_VERSIONS: 5
  },

  // Dashboard Settings
  DASHBOARD: {
    // Tabs configuration
    TABS: [
      { id: 'overview', label: 'Dashboard' },
      { id: 'jobs', label: 'Jobs' },
      { id: 'company', label: 'Company' },
      { id: 'stats', label: 'Statistics' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'faq', label: 'FAQ' },
      { id: 'partners', label: 'Partners' }
    ],

    // Items per page for pagination
    ITEMS_PER_PAGE: 10,

    // Default sort field
    DEFAULT_SORT: 'createdAt',

    // Default sort order (asc/desc)
    DEFAULT_SORT_ORDER: 'desc'
  },

  // Storage Settings
  STORAGE: {
    // Use localStorage
    USE_LOCAL_STORAGE: true,

    // Use sessionStorage
    USE_SESSION_STORAGE: false,

    // Storage key prefix
    KEY_PREFIX: 'nigsoft-admin-',

    // Encrypt stored data
    ENCRYPT_DATA: false,

    // Data expiry in days (0 = never)
    DATA_EXPIRY: 0
  },

  // Security Settings
  SECURITY: {
    // Require HTTPS
    REQUIRE_HTTPS: false,

    // Enable CSRF protection
    CSRF_PROTECTION: true,

    // Enable rate limiting
    RATE_LIMITING: true,

    // Rate limit per minute
    RATE_LIMIT: 60,

    // Enable CORS
    CORS_ENABLED: true,

    // Allowed CORS origins
    CORS_ORIGINS: [
      `http://localhost:${process.env.PORT || 3000}`, 
      'http://localhost:3000', 
      'http://localhost:3001',
      'http://localhost:5000'
    ],

    // Hash algorithm for passwords
    PASSWORD_HASH_ALGORITHM: 'sha256',

    // Enable audit logging
    AUDIT_LOGGING: true
  },

  // UI Settings
  UI: {
    // Theme color (primary brand color)
    PRIMARY_COLOR: '#E12E34',

    // Secondary color
    SECONDARY_COLOR: '#6B7280',

    // Success color
    SUCCESS_COLOR: '#10B981',

    // Warning color
    WARNING_COLOR: '#F59E0B',

    // Error color
    ERROR_COLOR: '#EF4444',

    // Dark mode support
    DARK_MODE: false,

    // Animations enabled
    ANIMATIONS: true,

    // Animation speed (ms)
    ANIMATION_SPEED: 300
  },

  // Email Settings (for future notifications)
  EMAIL: {
    // Enable email notifications
    ENABLED: false,

    // SMTP server
    SMTP_HOST: 'smtp.gmail.com',

    // SMTP port
    SMTP_PORT: 587,

    // SMTP username
    SMTP_USER: '',

    // SMTP password
    SMTP_PASSWORD: '',

    // From email
    FROM_EMAIL: 'noreply@nigsoft.com',

    // From name
    FROM_NAME: 'Nigsoft Admin'
  },

  // API Settings
  API: {
    // API base URL
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || `http://localhost:${process.env.PORT || 3000}`,

    // API timeout (ms)
    TIMEOUT: 10000,

    // Retry attempts
    MAX_RETRIES: 3,

    // Retry delay (ms)
    RETRY_DELAY: 1000,

    // Enable request logging
    LOG_REQUESTS: true,

    // Enable response caching
    CACHE_RESPONSES: true,

    // Cache duration (minutes)
    CACHE_DURATION: 5
  },

  // Feature Flags
  FEATURES: {
    // Enable image upload
    IMAGE_UPLOAD: true,

    // Enable content management
    CONTENT_MANAGEMENT: true,

    // Enable job management
    JOB_MANAGEMENT: true,

    // Enable analytics
    ANALYTICS: true,

    // Enable role management
    ROLE_MANAGEMENT: false,

    // Enable multi-user
    MULTI_USER: false,

    // Enable API access
    API_ACCESS: true,

    // Enable advanced permissions
    ADVANCED_PERMISSIONS: false,

    // Enable content versioning
    CONTENT_VERSIONING: false,

    // Enable scheduled publishing
    SCHEDULED_PUBLISHING: false
  },

  // Logging Settings
  LOGGING: {
    // Log level (error, warn, info, debug)
    LEVEL: process.env.NODE_ENV === 'production' ? 'error' : 'debug',

    // Enable console logging
    CONSOLE: true,

    // Enable file logging
    FILE_LOGGING: false,

    // Log file path
    LOG_FILE: '/logs/admin.log',

    // Max log file size (MB)
    MAX_LOG_SIZE: 10
  },

  // Validation Rules
  VALIDATION: {
    // Minimum password length
    MIN_PASSWORD_LENGTH: 6,

    // Require special characters in password
    PASSWORD_SPECIAL_CHARS: false,

    // Email validation regex
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    // URL validation regex
    URL_REGEX: /^https?:\/\/.+/,

    // Phone validation regex
    PHONE_REGEX: /^\d{10,}$/,

    // Max field length
    MAX_FIELD_LENGTH: 1000
  }
};

// Roles and Permissions
export const ADMIN_ROLES = {
  'super-admin': {
    name: 'Super Admin',
    permissions: [
      'manage.all',
      'manage.users',
      'manage.content',
      'manage.settings',
      'manage.roles',
      'view.analytics',
      'view.logs',
      'manage.api'
    ],
    description: 'Full system access'
  },
  'admin': {
    name: 'Admin',
    permissions: [
      'manage.content',
      'manage.jobs',
      'manage.testimonials',
      'manage.faq',
      'view.analytics'
    ],
    description: 'Manage content and basic operations'
  },
  'editor': {
    name: 'Editor',
    permissions: [
      'manage.content',
      'view.analytics'
    ],
    description: 'Manage content only'
  },
  'viewer': {
    name: 'Viewer',
    permissions: [
      'view.analytics',
      'view.content'
    ],
    description: 'View-only access'
  }
};

// Storage Keys
export const STORAGE_KEYS = {
  SESSION: 'nigsoft-admin-session',
  TOKEN: 'nigsoft-admin-token',
  LAST_ACTIVITY: 'nigsoft-last-activity',
  IMAGES: 'nigsoft-admin-images',
  CONTENT: 'nigsoft-admin-content',
  CONTENT_IMAGES: 'nigsoft-admin-content-images',
  USER_PREFERENCES: 'nigsoft-admin-preferences',
  THEME: 'nigsoft-admin-theme'
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/admin/auth',
    LOGOUT: '/api/admin/auth',
    VALIDATE: '/api/admin/auth',
    REFRESH: '/api/admin/auth'
  },
  CONTENT: {
    UPLOAD: '/api/admin/content',
    GET: '/api/admin/content',
    UPDATE: '/api/admin/content',
    DELETE: '/api/admin/content'
  }
};

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Invalid email or password',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters',
  REQUIRED_FIELD: 'This field is required',
  FILE_TOO_LARGE: 'File size exceeds maximum limit',
  INVALID_FILE_TYPE: 'Invalid file type. Accepted: JPEG, PNG, WebP, GIF',
  SESSION_EXPIRED: 'Your session has expired. Please login again',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  SERVER_ERROR: 'Server error. Please try again later',
  NETWORK_ERROR: 'Network error. Please check your connection'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGOUT_SUCCESS: 'Successfully logged out',
  UPLOAD_SUCCESS: 'Image uploaded successfully',
  DELETE_SUCCESS: 'Item deleted successfully',
  UPDATE_SUCCESS: 'Changes saved successfully',
  PUBLISH_SUCCESS: 'Content published successfully'
};

export default ADMIN_CONFIG;
