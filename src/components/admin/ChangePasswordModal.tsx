import React, { useState } from 'react';
import { X, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ChangePasswordModalProps {
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ onClose }) => {
  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      // 1. Verify current password via re-authentication
      const email = session.user.email;
      if (email) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password: currentPasswordInput,
        });
        if (signInError) {
          setError('Incorrect current password.');
          setLoading(false);
          return;
        }
      }

      if (newPassword.length < 6) {
        setError('New password must be at least 6 characters long.');
        setLoading(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        setError('New passwords do not match.');
        setLoading(false);
        return;
      }

      // 2. Update the password
      const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
      if (updateError) {
        setError(updateError.message);
        setLoading(false);
        return;
      }
    } else {
      // Legacy local credentials fallback
      const actualCurrentPassword = localStorage.getItem('ncb_admin_password') || 'Common213!!';

      if (currentPasswordInput !== actualCurrentPassword) {
        setError('Incorrect current password.');
        setLoading(false);
        return;
      }

      if (newPassword.length < 6) {
        setError('New password must be at least 6 characters long.');
        setLoading(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        setError('New passwords do not match.');
        setLoading(false);
        return;
      }

      if (newPassword === actualCurrentPassword) {
        setError('New password cannot be the same as current password.');
        setLoading(false);
        return;
      }

      localStorage.setItem('ncb_admin_password', newPassword);
    }

    setSuccess(true);
    setLoading(false);

    // Close the modal after a short delay so the success state is visible
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          type="button"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Change Password</h2>
          <p className="text-gray-500 text-sm">
            Enter your current password and choose a new one.
          </p>
        </div>

        {/* Success / Error Messages */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2 animate-shake">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
            <CheckCircle2 size={16} className="flex-shrink-0" />
            <span>Password updated successfully!</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              value={currentPasswordInput}
              onChange={(e) => setCurrentPasswordInput(e.target.value)}
              placeholder="Enter current password"
              required
              disabled={loading || success}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] transition-all bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              disabled={loading || success}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] transition-all bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              disabled={loading || success}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6e]/30 focus:border-[#1a3a6e] transition-all bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full mt-2 bg-[#2a3c7e] hover:bg-[#1f2d60] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Updating...
              </>
            ) : (
              'Change'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
