'use client';

import { useRouter } from 'next/navigation';

export default function SchoolRegistrationSuccessPage() {
  const router = useRouter();

  const handleVerifyCode = () => {
    router.push('/auth/verify');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Success message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Thanks for your school registration request
          </h1>
          
          <p className="text-sm text-gray-600 mb-8">
            Our team is going review your request to use e-record we will notify you later.
          </p>

          <button
            onClick={handleVerifyCode}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-colors"
          >
            Verify my code
          </button>
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
