'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  School, 
  Home, 
  Bell, 
  Settings,
  Search
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SchoolsManagementPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSchoolModal, setShowSchoolModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<any>(null);

  // Sample data for bar chart
  const registrationTrendData = [
    { month: 'Jan', count: 200 },
    { month: 'Feb', count: 250 },
    { month: 'Mar', count: 300 },
    { month: 'Apr', count: 350 },
    { month: 'May', count: 380 },
    { month: 'Jun', count: 420 },
    { month: 'July', count: 460 },
    { month: 'Aug', count: 500 },
    { month: 'Sept', count: 550 },
    { month: 'Oct', count: 600 },
    { month: 'Nov', count: 650 },
    { month: 'Dec', count: 700 },
  ];

  // Sample data for schools request
  const schoolsRequestData = Array(5).fill(null).map(() => ({
    name: 'Rwanda coding academy',
    email: 'rca@bc.rw',
    phone: '0788888888',
    location: 'Kigali Rwanda'
  }));

  // Sample data for active schools
  const activeSchoolsData = Array(5).fill(null).map(() => ({
    name: 'Rwanda coding academy',
    email: 'rca@bc.rw',
    phone: '0788888888',
    location: 'Kigali Rwanda'
  }));

  // Sample data for registered schools
  const registeredSchoolsData = Array(5).fill(null).map(() => ({
    name: 'Rwanda coding academy',
    email: 'rca@bc.rw',
    phone: '0788888888',
    location: 'Kigali Rwanda',
    subscription: 850000,
    joiningDate: '10/5/2025',
    status: 'Paid',
    systemStatus: 'Active'
  }));

  const handleViewSchool = (school: any) => {
    setSelectedSchool(school);
    setShowSchoolModal(true);
  };

  const handleRemoveSchool = () => {
    alert('School removed successfully! (No backend connected)');
    setShowSchoolModal(false);
  };

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
          <Link href="/admin/schools" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <School size={20} />
            <span className="font-medium">Schools Management</span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000000</div>
            <div className="text-sm text-gray-600">Total School</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1000000</div>
            <div className="text-sm text-gray-600">School Request</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000000</div>
            <div className="text-sm text-gray-600">Rwf</div>
            <div className="text-xs text-gray-500">Total Subscription Paid</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1000000</div>
            <div className="text-sm text-gray-600">Schools whose subscription ended</div>
          </div>
        </div>

        {/* School Registration Trend Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">School Registration Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={registrationTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#7c3aed" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Schools Request Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Schools Request (20)</h3>
              <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                Load more
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search School"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="text-sm text-gray-600">Latest schools</div>
            </div>
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

        {/* Active Schools Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Active Schools</h3>
              <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                View more
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search School"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="text-sm text-gray-600">Latest schools</div>
            </div>
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
                {activeSchoolsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleViewSchool(item)}
                          className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700"
                        >
                          View
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                          Remove
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
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Registered Schools</h3>
              <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                Load more
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search School"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Payment status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>System status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">System status</th>
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
                    <td className="px-6 py-4">
                      <span className="text-sm text-green-600">{item.systemStatus}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* School Information Modal */}
      {showSchoolModal && selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">School Information</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                  <input
                    type="text"
                    value={selectedSchool.name}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Email</label>
                  <input
                    type="email"
                    value={selectedSchool.email}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Phone</label>
                  <input
                    type="text"
                    value={selectedSchool.phone}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Location</label>
                  <input
                    type="text"
                    value={selectedSchool.location}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
                  <input
                    type="text"
                    value="Paid"
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Logo</label>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <School className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">System Status</label>
                <input
                  type="text"
                  value="Active"
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={handleRemoveSchool}
                  className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
                >
                  Remove school
                </button>
                <button
                  onClick={() => setShowSchoolModal(false)}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
