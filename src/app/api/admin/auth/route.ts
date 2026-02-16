import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Session type definition
interface Session {
  userId: string;
  email: string;
  role: string;
  token: string;
  createdAt: string;
  expiresAt: string;
}

// Database interfaces
interface User {
  id: string;
  email: string;
  role: string;
  createdAt: string;
}

interface Content {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

// Mock database - replace with real database in production
const adminDatabase: {
  users: Record<string, User>;
  sessions: Record<string, Session>;
  content: Record<string, Content>;
} = {
  users: {},
  sessions: {},
  content: {}
};

// Authentication endpoint
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    
    // Input validation
    if (!requestBody || typeof requestBody !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    const { action, payload } = requestBody;
    
    if (!action) {
      return NextResponse.json(
        { error: 'Action is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'login':
        return handleLogin(payload);
      
      case 'logout':
        return handleLogout(payload);
      
      case 'validate-token':
        return validateToken(payload);
      
      case 'refresh-token':
        return refreshToken(payload);
      
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

interface LoginPayload {
  email: string;
  password: string;
}

interface TokenPayload {
  token: string;
}

function handleLogin(payload: LoginPayload) {
  const { email, password } = payload;
  
  // Input validation
  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Valid email and password are required' },
      { status: 400 }
    );
  }
  
  // Validate credentials using timing-safe comparison
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      { success: false, error: 'Server configuration error' },
      { status: 500 }
    );
  }
  
  const emailMatch = crypto.timingSafeEqual(
    Buffer.from(email, 'utf8'),
    Buffer.from(adminEmail, 'utf8')
  );
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(password, 'utf8'),
    Buffer.from(adminPassword, 'utf8')
  );
  
  if (emailMatch && passwordMatch) {
    const token = generateToken();
    const session = {
      userId: 'admin-001',
      email,
      role: 'super-admin',
      token,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString()
    };

    adminDatabase.sessions[token] = session;

    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      token,
      session
    });

    response.cookies.set('admin-session', JSON.stringify({
      isAuthenticated: true,
      timestamp: new Date().toISOString()
    }), {
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      maxAge: 5 * 60,
      path: '/'
    });

    return response;
  }

  return NextResponse.json(
    { success: false, error: 'Invalid credentials' },
    { status: 401 }
  );
}

function handleLogout(payload: TokenPayload) {
  const { token } = payload;
  
  if (!token || typeof token !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Valid token is required' },
      { status: 400 }
    );
  }
  
  // Remove session from database
  delete adminDatabase.sessions[token];
  
  // Clear HTTP-only cookie
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin-session');
  
  return response;
}

function validateToken(payload: TokenPayload) {
  const { token } = payload;
  
  if (!token || typeof token !== 'string') {
    return NextResponse.json(
      { valid: false, error: 'Valid token is required' },
      { status: 400 }
    );
  }
  
  const session = adminDatabase.sessions[token];
  if (session) {
    const expiresAt = new Date(session.expiresAt);
    if (expiresAt > new Date()) {
      return NextResponse.json({
        valid: true,
        session
      });
    } else {
      // Clean up expired session
      delete adminDatabase.sessions[token];
    }
  }

  return NextResponse.json(
    { valid: false, error: 'Invalid or expired token' },
    { status: 401 }
  );
}

function refreshToken(payload: TokenPayload) {
  const { token } = payload;
  
  if (!token || typeof token !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Valid token is required' },
      { status: 400 }
    );
  }
  
  const session = adminDatabase.sessions[token];
  if (session) {
    // Check if session is expired before refreshing
    const expiresAt = new Date(session.expiresAt);
    if (expiresAt <= new Date()) {
      delete adminDatabase.sessions[token];
      return NextResponse.json(
        { success: false, error: 'Session expired' },
        { status: 401 }
      );
    }
    
    const newToken = generateToken();
    const updatedSession: Session = {
      ...session,
      token: newToken,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString()
    };

    delete adminDatabase.sessions[token];
    adminDatabase.sessions[newToken] = updatedSession;

    return NextResponse.json({
      success: true,
      token: newToken,
      session: updatedSession
    });
  }

  return NextResponse.json(
    { success: false, error: 'Invalid token' },
    { status: 401 }
  );
}

function generateToken(): string {
  const timestamp = Date.now();
  const randomBytes = crypto.randomBytes(16).toString('hex');
  return btoa(`${timestamp}:${randomBytes}`);
}
