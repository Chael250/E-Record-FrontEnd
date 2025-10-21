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
  ChevronDown,
  TrendingDown,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');

  // Sample data for charts
  const incomeExpensesData = [
    { month: 'Jan', income: 180000, expenses: 160000 },
    { month: 'Feb', income: 190000, expenses: 170000 },
    { month: 'Mar', income: 200000, expenses: 180000 },
    { month: 'Apr', income: 210000, expenses: 190000 },
    { month: 'May', income: 220342, expenses: 200000 },
    { month: 'Jun', income: 230000, expenses: 210000 },
    { month: 'July', income: 240000, expenses: 200000 },
    { month: 'Aug', income: 250000, expenses: 190000 },
    { month: 'Sept', income: 260000, expenses: 180000 },
    { month: 'Oct', income: 270000, expenses: 170000 },
    { month: 'Nov', income: 280000, expenses: 160000 },
    { month: 'Dec', income: 290000, expenses: 150000 },
  ];

  const budgetData = [
    { name: 'Technology', value: 45, color: '#6366f1' },
    { name: 'Academic', value: 35, color: '#22c55e' },
    { name: 'Maintenance', value: 15, color: '#f97316' },
  ];

  const schoolFeesData = [
    { name: 'Dushimire Aine', class: 'Senior 1 B', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', class: 'Senior 1 B', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', class: 'Senior 1 B', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', class: 'Senior 1 B', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', class: 'Senior 1 B', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
  ];

  const staffPayrollData = [
    { name: 'Dushimire Aine', department: 'Science', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
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
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
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
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total School Fees</span>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-purple-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-blue-600">
              <TrendingUp size={16} />
              <span>1.5%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Staff Payments</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
              <TrendingUp size={16} />
              <span>1.5%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Term Expenses</span>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <CreditCard className="text-red-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
            <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
              <TrendingDown size={16} />
              <span>1.5%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Budget Usage</span>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-orange-600" size={20} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">85%</div>
            <div className="mt-2">
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">HIGH</span>
            </div>
          </div>
        </div>

        {/* School Fees Management Table */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">School Fees Management</h3>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Names</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {schoolFeesData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-blue-600">{item.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Income/Expenses Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Income Expenses chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={incomeExpensesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} name="Income" />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold text-gray-900">220,342,123</div>
              <div className="text-sm text-gray-500">May</div>
            </div>
          </div>

          {/* Budget Overview & Money Usage */}
          <div className="space-y-8">
            {/* Budget Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {budgetData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Usage */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Money Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Academic</span>
                    <span className="text-gray-900">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Maintenance</span>
                    <span className="text-gray-900">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Technology</span>
                    <span className="text-gray-900">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Payroll Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Staff Payroll</h3>
            <span className="text-sm text-gray-600">Total amount: 1000000 Rwf</span>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staffPayrollData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.department}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-blue-600">{item.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.method}</td>
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
