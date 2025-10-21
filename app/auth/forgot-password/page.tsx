'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Password reset requested for:', email);
      // Redirect to reset password page
      router.push('/auth/reset-password');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Forgot Password
          </h1>
          
          <p className="text-sm text-gray-600 mb-6">
            Enter your email to reset password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Headmaster email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-colors"
            >
              Reset password
            </button>

            <div className="text-center">
              <Link
                href="/auth/signin"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Back to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/school-image.jpg)',
            backgroundColor: '#f0f0f0'
          }}
        >
          {/* Fallback gradient if image doesn't exist */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-purple-100 opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
