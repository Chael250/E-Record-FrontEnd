'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Users, 
  Package, 
  FileText, 
  Bell, 
  Settings,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function NotificationsPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'info',
      icon: 'bell',
      color: 'bg-purple-600',
      message: 'Your request for approval for student school fees have been updated in the system',
      time: '30 min ago'
    },
    {
      id: 2,
      type: 'alert',
      icon: 'alert',
      color: 'bg-red-600',
      message: '10 items in the stock are finished please add in more items in stock to be used',
      time: '30 min ago'
    },
    {
      id: 3,
      type: 'info',
      icon: 'bell',
      color: 'bg-purple-600',
      message: 'Your request for approval for student school fees have been updated in the system',
      time: '30 min ago'
    },
    {
      id: 4,
      type: 'success',
      icon: 'check',
      color: 'bg-green-600',
      message: 'School Budget being added in the system successfully',
      time: '30 min ago'
    },
    {
      id: 5,
      type: 'info',
      icon: 'bell',
      color: 'bg-purple-600',
      message: 'Your request for approval for student school fees have been updated in the system',
      time: '30 min ago'
    },
    {
      id: 6,
      type: 'success',
      icon: 'check',
      color: 'bg-green-600',
      message: 'School Budget being added in the system successfully',
      time: '30 min ago'
    },
    {
      id: 7,
      type: 'alert',
      icon: 'alert',
      color: 'bg-red-600',
      message: '10 items in the stock are finished please add in more items in stock to be used',
      time: '30 min ago'
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-purple-600">E-Record</h1>
          <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Accountant
          </button>
        </div>

        <nav className="px-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/fees" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <DollarSign size={20} />
            <span>Fees Management</span>
          </Link>
          <Link href="/expenses" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <CreditCard size={20} />
            <span>Expense Management</span>
          </Link>
          <Link href="/budget" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <TrendingUp size={20} />
            <span>Budget Planning</span>
          </Link>
          <Link href="/payroll" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Users size={20} />
            <span>Staff Payroll</span>
          </Link>
          <Link href="/inventory" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Package size={20} />
            <span>Inventory</span>
          </Link>
          <Link href="/reports" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <FileText size={20} />
            <span>Financial Report</span>
          </Link>
          <Link href="/notifications" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <Bell size={20} />
            <span className="font-medium">Notifications</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
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
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to our platform John</h2>
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
            <select 
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>First Term</option>
              <option>Second Term</option>
              <option>Third Term</option>
            </select>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h3>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All (20)
              </button>
              <button
                onClick={() => setActiveTab('unread')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'unread'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setActiveTab('spam')}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'spam'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Spam
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Today</h4>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-12 h-12 ${notification.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {notification.icon === 'bell' && <Bell className="text-white" size={24} />}
                    {notification.icon === 'alert' && <AlertCircle className="text-white" size={24} />}
                    {notification.icon === 'check' && <CheckCircle className="text-white" size={24} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
