import { NextRequest } from 'next/server';

export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  try {
    const adminSession = request.cookies.get('admin-session');
    
    if (!adminSession) {
      return false;
    }

    const sessionData = JSON.parse(adminSession.value);
    
    // Check if session is expired (30 minutes for better UX)
    const sessionTime = new Date(sessionData.timestamp).getTime();
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;
    
    if (now - sessionTime > thirtyMinutes) {
      return false;
    }

    return sessionData.isAuthenticated === true;
  } catch (error) {
    return false;
  }
}

export function unauthorizedResponse() {
  return Response.json(
    { error: 'Unauthorized. Please login to admin panel.' },
    { status: 401 }
  );
}
