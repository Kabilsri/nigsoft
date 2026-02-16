"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SessionConfig {
  timeout: number; // in minutes
  warningTime: number; // in minutes before timeout
  rememberSession: boolean;
}

interface SessionContextType {
  isSessionActive: boolean;
  sessionTimeRemaining: number;
  showSessionWarning: boolean;
  extendSession: () => void;
  getUserRole: () => string | null;
  checkPermission: (permission: string) => boolean;
  sessionConfig: SessionConfig;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const ADMIN_ROLES = {
  'super-admin': ['manage.all', 'manage.users', 'manage.content', 'view.analytics', 'manage.settings'],
  'admin': ['manage.content', 'view.analytics'],
  'editor': ['manage.content']
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(1800); // 30 minutes
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const sessionConfig: SessionConfig = {
    timeout: 30,
    warningTime: 5,
    rememberSession: true
  };

  // Get user role from localStorage or auth context
  useEffect(() => {
    const stored = localStorage.getItem('nigsoft-admin-session');
    if (stored) {
      const session = JSON.parse(stored);
      setUserRole(session.role);
    }
  }, []);

  // Session timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTimeRemaining(prev => {
        if (prev <= 0) {
          setIsSessionActive(false);
          clearInterval(interval);
          return 0;
        }

        const timeInMinutes = Math.ceil(prev / 60);
        if (timeInMinutes === sessionConfig.warningTime) {
          setShowSessionWarning(true);
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const extendSession = () => {
    setSessionTimeRemaining(sessionConfig.timeout * 60);
    setShowSessionWarning(false);
  };

  const getUserRole = () => userRole;

  const checkPermission = (permission: string): boolean => {
    if (!userRole) return false;
    const permissions = ADMIN_ROLES[userRole as keyof typeof ADMIN_ROLES] || [];
    return permissions.includes(permission);
  };

  return (
    <SessionContext.Provider
      value={{
        isSessionActive,
        sessionTimeRemaining,
        showSessionWarning,
        extendSession,
        getUserRole,
        checkPermission,
        sessionConfig
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return context;
};
