"use client";

import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, AlertCircle, Loader } from 'lucide-react';
import { useEnhancedAuth } from '@/contexts/enhanced-auth-context';

const EnhancedAdminLogin = () => {
  const { login, isLoading, error } = useEnhancedAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!validateForm()) {
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setPassword('');
      setLocalError(error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-[#E12E34] flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#E12E34] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40"></div>
      </div>

      <div className="relative max-w-md w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#E12E34] to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600 mt-2 text-sm">Secure access to Nigsoft management</p>
          </div>

          {(localError || error) && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium text-sm">{localError || error}</p>
                <p className="text-red-700 text-xs mt-1">Please check your credentials and try again.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValidationErrors({ ...validationErrors, email: '' });
                }}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  validationErrors.email
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-gray-200 focus:border-[#E12E34] bg-white'
                }`}
                placeholder="example@gmail.com"
                disabled={isLoading}
              />
              {validationErrors.email && (
                <p className="text-red-600 text-xs mt-1">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValidationErrors({ ...validationErrors, password: '' });
                  }}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors pr-12 ${
                    validationErrors.password
                      ? 'border-red-500 bg-red-50 focus:border-red-600'
                      : 'border-gray-200 focus:border-[#E12E34] bg-white'
                  }`}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {validationErrors.password && (
                <p className="text-red-600 text-xs mt-1">{validationErrors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#E12E34] to-red-600 text-white py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading && <Loader className="w-5 h-5 animate-spin" />}
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600 text-center mb-3 font-medium">Demo Credentials</p>
            <div className="space-y-2 text-xs text-gray-600">
              <p><span className="font-semibold">Email:</span> admin@nigsoft.com</p>
              <p><span className="font-semibold">Password:</span> nigsoft@admin2024</p>
            </div>
          </div> */}

          <p className="text-center text-xs text-gray-500 mt-6">
            Protected with secure authentication • Session timeout after 30 minutes of inactivity
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAdminLogin;
