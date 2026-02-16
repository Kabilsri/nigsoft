"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super-admin';
  createdAt: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  refreshToken: () => Promise<boolean>;
}

const EnhancedAuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_ADMIN_CREDENTIALS = {
  email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
};

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export const EnhancedAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionTimer, setSessionTimer] = useState<NodeJS.Timeout | null>(null);

  // Initialize session from localStorage
  useEffect(() => {
    const initializeSession = () => {
      try {
        const storedAuth = localStorage.getItem('nigsoft-admin-session');
        const storedToken = localStorage.getItem('nigsoft-admin-token');
        const lastActivity = localStorage.getItem('nigsoft-last-activity');
        
        if (storedAuth && storedToken) {
          const now = Date.now();
          const lastActivityTime = lastActivity ? parseInt(lastActivity) : now;
          
          // Always require re-login after page refresh for security
          // Check if session has expired OR if page was refreshed
          const pageLoadTime = sessionStorage.getItem('nigsoft-page-load-time');
          const isPageRefresh = !pageLoadTime || (now - parseInt(pageLoadTime)) < 1000;
          
          if (now - lastActivityTime > SESSION_TIMEOUT || isPageRefresh) {
            clearSession();
          } else {
            const authData = JSON.parse(storedAuth);
            setUser(authData);
            setToken(storedToken);
            setIsAuthenticated(true);
            updateActivityTime();
          }
        }
        
        // Mark page load time
        sessionStorage.setItem('nigsoft-page-load-time', Date.now().toString());
      } catch (err) {
        console.error('Failed to initialize session:', err);
        clearSession();
      }
    };

    initializeSession();
  }, []);

  // Session activity monitoring with throttling
  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;
    
    const handleActivity = () => {
      if (isAuthenticated && !throttleTimer) {
        throttleTimer = setTimeout(() => {
          updateActivityTime();
          resetSessionTimer();
          throttleTimer = null;
        }, 1000); // Throttle to once per second
      }
    };

    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, [isAuthenticated]);

  const updateActivityTime = useCallback(() => {
    localStorage.setItem('nigsoft-last-activity', Date.now().toString());
  }, []);

  const resetSessionTimer = useCallback(() => {
    if (sessionTimer) {
      clearTimeout(sessionTimer);
    }
    
    const newTimer = setTimeout(() => {
      clearSession();
    }, SESSION_TIMEOUT);
    
    setSessionTimer(newTimer);
  }, []);

  const generateToken = useCallback((): string => {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2);
    return btoa(`${timestamp}:${randomStr}`);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Call the API to set the cookie
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          action: 'login',
          payload: { email, password }
        })
      });

      const result = await response.json();

      if (result.success) {
        const newUser: AdminUser = {
          id: 'admin-001',
          email: email,
          role: 'super-admin',
          createdAt: new Date().toISOString()
        };

        setUser(newUser);
        setToken(result.token);
        setIsAuthenticated(true);
        
        localStorage.setItem('nigsoft-admin-session', JSON.stringify(newUser));
        localStorage.setItem('nigsoft-admin-token', result.token);
        localStorage.setItem('nigsoft-last-activity', Date.now().toString());

        resetSessionTimer();
        return true;
      } else {
        setError(result.error || 'Invalid email or password');
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const refreshToken = async (): Promise<boolean> => {
    if (!token) return false;

    try {
      const newToken = generateToken();
      setToken(newToken);
      localStorage.setItem('nigsoft-admin-token', newToken);
      updateActivityTime();
      resetSessionTimer();
      return true;
    } catch (err) {
      setError('Failed to refresh token');
      return false;
    }
  };

  const clearSession = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem('nigsoft-admin-session');
    localStorage.removeItem('nigsoft-admin-token');
    localStorage.removeItem('nigsoft-last-activity');
    if (sessionTimer) {
      clearTimeout(sessionTimer);
    }
  }, [sessionTimer]);

  const logout = () => {
    clearSession();
  };

  return (
    <EnhancedAuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
        isLoading,
        error,
        refreshToken
      }}
    >
      {children}
    </EnhancedAuthContext.Provider>
  );
};

export const useEnhancedAuth = () => {
  const context = useContext(EnhancedAuthContext);
  if (!context) {
    throw new Error('useEnhancedAuth must be used within EnhancedAuthProvider');
  }
  return context;
};
