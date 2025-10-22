'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  School, 
  Home, 
  Bell, 
  Settings
} from 'lucide-react';

export default function AdminNotificationsPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [activeTab, setActiveTab] = useState('All');

  // Sample notifications data
  const notifications = [
    { type: 'info', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-purple-600' },
    { type: 'alert', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-red-600' },
    { type: 'info', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-purple-600' },
    { type: 'success', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-green-600' },
    { type: 'info', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-purple-600' },
    { type: 'success', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-green-600' },
    { type: 'alert', message: 'Rwanda coding academy made a request to use e-record system', time: '30 min ago', color: 'bg-red-600' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-purple-600">E-Record</h1>
          <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Admin
          </button>
        </div>

        <nav className="px-4 space-y-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/schools" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <School size={20} />
            <span>Schools Management</span>
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Home size={20} />
            <span>Users Management</span>
          </Link>
          <Link href="/admin/notifications" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <Bell size={20} />
            <span className="font-medium">Notifications</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to our platform Admin</h2>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Notifications</h3>
            
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('All')}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === 'All'
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All (20)
                {activeTab === 'All' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('Unread')}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === 'Unread'
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Unread
                {activeTab === 'Unread' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('Spam')}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === 'Spam'
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Spam
                {activeTab === 'Spam' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
                )}
              </button>
            </div>

            {/* Today Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Today</h4>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-12 h-12 ${notification.color} rounded-lg flex items-center justify-center shrink-0`}>
                      <Bell className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{notification.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 shrink-0">{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
