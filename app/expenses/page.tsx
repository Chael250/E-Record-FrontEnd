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
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function ExpenseManagementPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedStatus, setSelectedStatus] = useState('Status');

  // Sample table data
  const expensesData = Array(15).fill(null).map((_, index) => ({
    date: '10/5/2025',
    vendor: 'Tyuza Utwenge',
    purpose: 'Buying teacher materials',
    amount: 850000,
    status: 'Paid'
  }));

  const totalPages = 68;

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
          <Link href="/expenses" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <CreditCard size={20} />
            <span className="font-medium">Expense Management</span>
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
          <Link href="/notifications" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span>Notifications</span>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total School Expenses</div>
            <div className="text-2xl font-bold text-gray-900">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Pending approval</div>
            <div className="text-2xl font-bold text-orange-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Budget Used</div>
            <div className="text-2xl font-bold text-gray-900">85%</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Next transactions</div>
            <div className="text-2xl font-bold text-gray-900">10</div>
          </div>
        </div>

        {/* Expenses Management Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses Management</h3>
            
            {/* Filters and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search expense"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Category</option>
                  <option>Academic</option>
                  <option>Maintenance</option>
                  <option>Technology</option>
                  <option>Utilities</option>
                </select>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Approved</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                  Add new Expense
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expensesData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.vendor}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.purpose}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.amount}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-blue-600">{item.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">
                          View
                        </button>
                        <button className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-md hover:bg-blue-200">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-md disabled:opacity-50"
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                Previous
              </button>
              
              <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                2
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                3
              </button>
              <span className="px-3 py-1 text-sm text-gray-600">...</span>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                67
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                68
              </button>
              
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                Next
              </button>
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-md disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
