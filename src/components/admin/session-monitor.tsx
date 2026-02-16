"use client";

import React, { useEffect, useState } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { useEnhancedAuth } from '@/contexts/enhanced-auth-context';

interface SessionWarningProps {
  showWarning: boolean;
  timeRemaining: number;
  onExtend: () => void;
  onLogout: () => void;
}

export const SessionWarning: React.FC<SessionWarningProps> = ({
  showWarning,
  timeRemaining,
  onExtend,
  onLogout
}) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  if (!showWarning) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg border-l-4 border-orange-500 p-4 max-w-sm animate-slide-in">
      <div className="flex gap-3">
        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Session Expiring Soon</p>
          <p className="text-sm text-gray-600 mb-3">
            Your session will expire in {minutes}:{String(seconds).padStart(2, '0')}
          </p>
          <div className="flex gap-2">
            <button
              onClick={onExtend}
              className="flex-1 px-3 py-1 bg-orange-500 text-white rounded text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Continue Session
            </button>
            <button
              onClick={onLogout}
              className="flex-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SessionMonitorProps {
  children: React.ReactNode;
}

export const SessionMonitor: React.FC<SessionMonitorProps> = ({ children }) => {
  const { logout, refreshToken } = useEnhancedAuth();
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          logout();
          clearInterval(interval);
          return 0;
        }

        // Show warning at 5 minutes
        if (prev === 300) {
          setShowWarning(true);
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [logout]);

  const handleExtendSession = async () => {
    const success = await refreshToken();
    if (success) {
      setTimeRemaining(1800);
      setShowWarning(false);
    }
  };

  return (
    <>
      {children}
      <SessionWarning
        showWarning={showWarning}
        timeRemaining={timeRemaining}
        onExtend={handleExtendSession}
        onLogout={logout}
      />
    </>
  );
};

export default SessionMonitor;
