import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          E-Record System
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the E-Record Management System
        </p>
        <div className="space-y-6">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/auth/register"
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              User Register
            </Link>
            <Link
              href="/auth/login"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/signin"
              className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-md border border-gray-300 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/verify"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Verify Code
            </Link>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/school/register"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Register School
            </Link>
            <Link
              href="/auth/forgot-password"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Forgot Password
            </Link>
            <Link
              href="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
