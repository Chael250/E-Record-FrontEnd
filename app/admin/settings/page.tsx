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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminSettingsPage() {
  const [selectedYear, setSelectedYear] = useState('2025');

  // Sample data for line chart
  const usageData = [
    { time: '0:2:00', hours: 160 },
    { time: '2:4:00', hours: 165 },
    { time: '4:6:00', hours: 180 },
    { time: '6:8:00', hours: 170 },
    { time: '8:10:00', hours: 200 },
    { time: '10:12:00', hours: 220 },
    { time: '12:14:00', hours: 210 },
    { time: '14:16:00', hours: 230 },
    { time: '16:18:00', hours: 250 },
    { time: '18:20:00', hours: 240 },
    { time: '20:22:00', hours: 220 },
    { time: '22:24:00', hours: 200 },
  ];

  // Sample data for insecure login attempts
  const loginAttempts = [
    { email: 'aishadushimire@gmail.com', attempts: 20, time: '20/1/2025' },
    { email: 'aishadushimire@gmail.com', attempts: 20, time: '20/1/2025' },
    { email: 'aishadushimire@gmail.com', attempts: 20, time: '20/1/2025' },
    { email: 'aishadushimire@gmail.com', attempts: 20, time: '20/1/2025' },
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
          <Link href="/admin/notifications" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span>Notifications</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
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

        {/* Settings Section */}
        <div className="space-y-8">
          {/* Personal Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Settings</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value="Dushimire aine"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  value="System Admin"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value="aishadushimire@gmail.com"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="text"
                  value="0788888888"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value="Kigali Rwanda"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Notifications</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notification email</label>
                <input
                  type="email"
                  value="aishadushimire@gmail.com"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sms Notification Number</label>
                <input
                  type="text"
                  value="0788888888"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Notifications</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All</option>
                <option>Important Only</option>
                <option>None</option>
              </select>
            </div>
          </div>

          {/* Data Backup */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Backup</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>

          {/* Insecure Login attempts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Insecure Login attempts</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Login attempts</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Login Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loginAttempts.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{item.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.attempts}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.time}</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                          Unauthorize
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Most Hours to Used in System */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Most Hours to Used in System</h3>
            
            <div className="relative">
              <div className="absolute top-4 right-4 text-right">
                <div className="text-3xl font-bold text-gray-900">220,342,123</div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#7c3aed" 
                    strokeWidth={2}
                    dot={{ fill: '#7c3aed', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
