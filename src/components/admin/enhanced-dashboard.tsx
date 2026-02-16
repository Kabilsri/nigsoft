"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useEnhancedAuth } from '@/contexts/enhanced-auth-context';
import { useSession } from '@/contexts/session-context';
import JobManager from './job-manager';
const ShopManager = dynamic(() => import('./shop-manager'), { ssr: false });
const TabManager = dynamic(() => import('./tab-manager'), { ssr: false });
const ReviewManager = dynamic(() => import('./review-manager'), { ssr: false });
const SubmissionsManager = dynamic(() => import('./submissions-manager'), { ssr: false });
import SessionMonitor from './session-monitor';
import {
  LayoutDashboard,
  Briefcase,
  ShoppingBag,
  Tags,
  MessageSquare,
  FileText,
  LogOut,
  Menu,
  X
} from 'lucide-react';

type TabType = 'dashboard' | 'jobs' | 'shop' | 'tabs' | 'reviews' | 'submissions';

interface EnhancedDashboardProps {
  posts?: any[];
}

const EnhancedDashboard: React.FC<EnhancedDashboardProps> = ({ posts }) => {
  const { logout } = useEnhancedAuth();
  const { sessionTimeRemaining } = useSession();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'jobs' as TabType, label: 'Jobs', icon: Briefcase },
    { id: 'shop' as TabType, label: 'Shop', icon: ShoppingBag },
    { id: 'tabs' as TabType, label: 'Shop Tabs', icon: Tags },
    { id: 'reviews' as TabType, label: 'Reviews', icon: MessageSquare },
    { id: 'submissions' as TabType, label: 'Submissions', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'jobs':
        return <JobManager />;
      case 'shop':
        return <ShopManager />;
      case 'tabs':
        return <TabManager />;
      case 'reviews':
        return <ReviewManager />;
      case 'submissions':
        return <SubmissionsManager />;
      case 'dashboard':
      default:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Manage your job postings and career opportunities from this centralized dashboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Content Management</h3>
                  <p className="text-blue-700 text-sm">
                    Manage jobs and shop products. Blog posts are managed via WordPress.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Session Status</h3>
                  <p className="text-green-700 text-sm">
                    Time remaining: {formatTime(sessionTimeRemaining)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SessionMonitor>
        <div></div>
      </SessionMonitor>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-2 rounded-md shadow-md"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-primary">
            <h1 className="text-white text-xl font-bold">Admin Panel</h1>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Session expires in:</p>
              <p className="text-lg font-mono font-bold text-primary">
                {formatTime(sessionTimeRemaining)}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 overflow-x-hidden">
        <div className="p-6 max-w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {activeTab === 'dashboard' ? 'Dashboard' : tabs.find(t => t.id === activeTab)?.label}
            </h1>
          </div>

          <div className="w-full overflow-x-hidden">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default EnhancedDashboard;