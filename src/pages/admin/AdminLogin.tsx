import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, GraduationCap, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ADMIN_ID = 'Admin@nationalpubasavanagudi.edu.in';
const ADMIN_PASSWORD = 'Common213!!';
const SESSION_KEY = 'ncb_admin_session';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'authenticated') {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(r => setTimeout(r, 600));

    // Try logging in using Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: userId,
      password: password,
    });

    if (!authError && authData.user) {
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
      navigate('/admin/dashboard');
    } else {
      // Fallback to local storage/legacy credentials check
      const storedPassword = localStorage.getItem('ncb_admin_password') || ADMIN_PASSWORD;
      if (userId === ADMIN_ID && password === storedPassword) {
        sessionStorage.setItem(SESSION_KEY, 'authenticated');
        navigate('/admin/dashboard');
      } else {
        // Use authError message if there is one, otherwise the standard error
        setError(authError?.message || 'Invalid credentials. Please check your User ID and Password.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2447] via-[#1a3a6e] to-[#0d1f3c] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl" />

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a3a6e] to-[#2557a7] p-8 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">The National College</h1>
              <p className="text-blue-200 text-sm">Basavanagudi, Bengaluru</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                <Shield size={14} className="text-blue-200" />
                <span className="text-white text-xs font-medium">Admin Portal</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Welcome Back</h2>
            <p className="text-gray-500 text-sm mb-6">Sign in to access the admin dashboard</p>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* User ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  User ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder="Enter your admin User ID"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] transition-all bg-gray-50 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#1a3a6e] to-[#2557a7] hover:from-[#152e58] hover:to-[#1e4a8a] text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    Sign In to Admin Panel
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-gray-400">
              Restricted access — authorized personnel only
            </p>
          </div>
        </div>

        {/* Below card */}
        <p className="text-center text-white/40 text-xs mt-6">
          © {new Date().getFullYear()} The National College, Basavanagudi
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
