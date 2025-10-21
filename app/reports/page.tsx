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
  Calendar
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function FinancialReportPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [activeTab, setActiveTab] = useState('profit-loss');
  const [reportField, setReportField] = useState('');
  const [startDate, setStartDate] = useState('yyyy/mm/dd');
  const [endDate, setEndDate] = useState('yyyy/mm/dd');

  // Sample data for income/expenses chart
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

  // Profit and Loss data
  const profitLossData = [
    { category: 'School Fees', amount: 850000, type: 'income' },
    { category: 'School Materials', amount: 850000, type: 'expense' },
    { category: 'School Fees', amount: 850000, type: 'income' },
    { category: 'School Fees', amount: 850000, type: 'expense' },
    { category: 'School Fees', amount: 850000, type: 'income' },
  ];

  // Cash Flow data
  const cashFlowData = [
    { period: 'January', inflow: 100000, outflow: 100000, netCash: 100000 },
    { period: 'February', inflow: 100000, outflow: 100000, netCash: 100000 },
    { period: 'March', inflow: 100000, outflow: 100000, netCash: 100000 },
    { period: 'April', inflow: 100000, outflow: 100000, netCash: 100000 },
  ];

  // Balance Sheet data
  const balanceSheetAssets = [
    { item: 'School Fees', amount: 850000 },
    { item: 'School Materials', amount: 850000 },
    { item: 'School Fees', amount: 850000 },
  ];

  const balanceSheetLiabilities = [
    { item: 'School Fees', amount: 850000 },
    { item: 'School Materials', amount: 850000 },
    { item: 'School Fees', amount: 850000 },
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
          <Link href="/reports" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <FileText size={20} />
            <span className="font-medium">Financial Report</span>
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

        <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Reports</h3>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Income</div>
            <div className="text-2xl font-bold text-green-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Expenses</div>
            <div className="text-2xl font-bold text-red-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Net Profit</div>
            <div className="text-2xl font-bold text-orange-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Current Cash Balance</div>
            <div className="text-2xl font-bold text-gray-900">1000000 Rwf</div>
          </div>
        </div>

        {/* Income Expenses Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Income Expenses chart</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Expenses</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={incomeExpensesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <div className="text-2xl font-bold text-gray-900">220,342,123</div>
            <div className="text-sm text-gray-500">May</div>
          </div>
        </div>

        {/* Financial Information Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
            
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('profit-loss')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'profit-loss'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Profit and Loss Statement
              </button>
              <button
                onClick={() => setActiveTab('cashflow')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'cashflow'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Cash Flow Statement
              </button>
              <button
                onClick={() => setActiveTab('balance-sheet')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'balance-sheet'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Balance Sheet
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'custom'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Custom Reports
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profit and Loss Statement */}
            {activeTab === 'profit-loss' && (
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 mb-2">Income</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <div className="text-right text-sm text-gray-900 mt-1">85%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 mb-2">Expenses</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="text-right text-sm text-gray-900 mt-1">45%</div>
                    </div>
                  </div>
                </div>

                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {profitLossData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.category}</td>
                        <td className={`px-6 py-4 text-sm font-medium ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Net Profit</td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">850000</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 flex gap-2">
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                    Export Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Print Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Share via gmail
                  </button>
                </div>
              </div>
            )}

            {/* Cash Flow Statement */}
            {activeTab === 'cashflow' && (
              <div>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Periods</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inflow</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Outflow</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net Cash</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cashFlowData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.period}</td>
                        <td className="px-6 py-4 text-sm text-green-600">{item.inflow}</td>
                        <td className="px-6 py-4 text-sm text-red-600">{item.outflow}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.netCash}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-6 flex gap-2">
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                    Export Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Print Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Share via gmail
                  </button>
                </div>
              </div>
            )}

            {/* Balance Sheet */}
            {activeTab === 'balance-sheet' && (
              <div>
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Assets</h4>
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {balanceSheetAssets.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm text-gray-900">{item.item}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Liability</h4>
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {balanceSheetLiabilities.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm text-gray-900">{item.item}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm font-semibold text-gray-900">Net Cash : 1000000</span>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                    Export Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Print Report
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Share via gmail
                  </button>
                </div>
              </div>
            )}

            {/* Custom Reports */}
            {activeTab === 'custom' && (
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Report Prepareament</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Select report fields</label>
                      <select
                        value={reportField}
                        onChange={(e) => setReportField(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Report field</option>
                        <option value="income">Income</option>
                        <option value="expenses">Expenses</option>
                        <option value="profit">Profit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Academic</label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">X</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Select time range</label>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="yyyy/mm/dd"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="yyyy/mm/dd"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                        Download Report
                      </button>
                      <button className="px-4 py-2 bg-white border border-purple-600 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50">
                        Preview
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Action</h4>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                        Export Report
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                        Print Report
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                        Share via gmail
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Preview</h4>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-400">Report preview will appear here</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
