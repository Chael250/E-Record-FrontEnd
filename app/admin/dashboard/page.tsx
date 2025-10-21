'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  School, 
  Home, 
  Bell, 
  Settings,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [selectedYear, setSelectedYear] = useState('2025');

  // Sample data for schools request
  const schoolsRequestData = [
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', phone: '0788888888', location: 'Kigali Rwanda' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', phone: '0788888888', location: 'Kigali Rwanda' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', phone: '0788888888', location: 'Kigali Rwanda' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', phone: '0788888888', location: 'Kigali Rwanda' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', phone: '0788888888', location: 'Kigali Rwanda' },
  ];

  // Sample data for registered schools
  const registeredSchoolsData = [
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', subscription: 850000, joiningDate: '10/5/2025', status: 'Paid' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', subscription: 850000, joiningDate: '10/5/2025', status: 'Paid' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', subscription: 850000, joiningDate: '10/5/2025', status: 'Paid' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', subscription: 850000, joiningDate: '10/5/2025', status: 'Paid' },
    { name: 'Rwanda coding academy', email: 'rca@bc.rw', subscription: 850000, joiningDate: '10/5/2025', status: 'Paid' },
  ];

  // Sample data for active users
  const activeUsersData = [
    { name: 'Dushimire Aine', school: 'Rwanda coding academy', role: 'Accountant', joiningDate: '10/5/2025', email: 'aishadushimire@bc.rw' },
    { name: 'Dushimire Aine', school: 'Rwanda coding academy', role: 'Accountant', joiningDate: '10/5/2025', email: 'aishadushimire@bc.rw' },
    { name: 'Dushimire Aine', school: 'Rwanda coding academy', role: 'Accountant', joiningDate: '10/5/2025', email: 'aishadushimire@bc.rw' },
    { name: 'Dushimire Aine', school: 'Rwanda coding academy', role: 'Accountant', joiningDate: '10/5/2025', email: 'aishadushimire@bc.rw' },
    { name: 'Dushimire Aine', school: 'Rwanda coding academy', role: 'Accountant', joiningDate: '10/5/2025', email: 'aishadushimire@bc.rw' },
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
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total School</span>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <School className="text-purple-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">100</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-blue-600">
              <TrendingUp size={16} />
              <span>1.5%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Users</span>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="text-orange-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">1000000</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
              <TrendingUp size={16} />
              <span>1.5%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Payments</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">10000000 Rwf</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
              <TrendingUp size={16} />
              <span>1.5%</span>
            </div>
          </div>
        </div>

        {/* Schools Request Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Schools Request</h3>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">School Names</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {schoolsRequestData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">
                          View
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                          Accept
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Registered Schools Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Registered Schools</h3>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">School Names</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subscription amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joining Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {registeredSchoolsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.subscription}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.joiningDate}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-blue-600">{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Users Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
              <p className="text-sm text-gray-600">Total users: 1000000</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">School</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joining Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activeUsersData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.school}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.joiningDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
