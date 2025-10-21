'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) {
        newCode[index] = char;
      }
    });
    setCode(newCode);

    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex(val => !val);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length === 6) {
      console.log('Verification code:', verificationCode);
      alert(`Verification successful! Code: ${verificationCode} (No backend connected)`);
      // Redirect to dashboard or next step
    } else {
      alert('Please enter all 6 digits');
    }
  };

  const handleResend = () => {
    console.log('Resending verification code...');
    alert('Verification code resent! (No backend connected)');
    setCode(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            We've Sent You a Verification Code!
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            Check your inbox for a 6-digit code.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-3 justify-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-colors"
            >
              Verify my code
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Didn't receive the code?{' '}
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Resend
                </button>
              </p>
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
