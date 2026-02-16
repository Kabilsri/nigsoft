// Simple error logging utility

interface LogContext {
  [key: string]: any;
}

export function logError(error: Error | unknown, context?: LogContext) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;

  console.error('[ERROR]', {
    message: errorMessage,
    stack: errorStack,
    context,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });

  // In production, you can send to external service
  if (process.env.NODE_ENV === 'production') {
    // TODO: Send to logging service (Sentry, LogRocket, etc.)
  }
}

export function logInfo(message: string, data?: LogContext) {
  console.log('[INFO]', {
    message,
    data,
    timestamp: new Date().toISOString()
  });
}

export function logWarning(message: string, data?: LogContext) {
  console.warn('[WARNING]', {
    message,
    data,
    timestamp: new Date().toISOString()
  });
}

export function logApiRequest(method: string, path: string, ip?: string, status?: number) {
  console.log('[API]', {
    method,
    path,
    ip,
    status,
    timestamp: new Date().toISOString()
  });
}
