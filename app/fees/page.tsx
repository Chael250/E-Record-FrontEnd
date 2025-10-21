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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function FeesManagementPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClass, setSelectedClass] = useState('Senior One');
  const [selectedStatus, setSelectedStatus] = useState('Paid');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newFee, setNewFee] = useState({
    studentName: '',
    studentPromotion: '',
    studentClass: '',
    feesAmount: '',
    document: null as File | null
  });

  // Sample data for bar chart
  const promotionsData = [
    { name: 'Senior One', paidStudents: 180, unpaidStudents: 150 },
    { name: 'Senior Two', paidStudents: 190, unpaidStudents: 140 },
    { name: 'Senior Three', paidStudents: 185, unpaidStudents: 145 },
    { name: 'Senior Four', paidStudents: 175, unpaidStudents: 155 },
    { name: 'Senior Five', paidStudents: 180, unpaidStudents: 150 },
    { name: 'Senior Six', paidStudents: 190, unpaidStudents: 140 },
  ];

  // Sample table data
  const feesData = Array(15).fill(null).map((_, index) => ({
    name: 'Dushimire Aine',
    class: 'Senior 1 B',
    amount: 850000,
    date: '10/5/2025',
    status: 'Paid',
    method: 'Bank Account'
  }));

  const totalPages = 68;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewFee(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewFee(prev => ({ ...prev, document: file }));
    }
  };

  const handleSaveFee = () => {
    console.log('Saving fee:', newFee);
    alert('Fee added successfully! (No backend connected)');
    setShowAddModal(false);
    setNewFee({
      studentName: '',
      studentPromotion: '',
      studentClass: '',
      feesAmount: '',
      document: null
    });
  };

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
          <Link href="/fees" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <DollarSign size={20} />
            <span className="font-medium">Fees Management</span>
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
            <div className="text-sm text-gray-600 mb-2">Total School Fees Paid</div>
            <div className="text-2xl font-bold text-gray-900">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total School Unpaid Fees</div>
            <div className="text-2xl font-bold text-red-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Student Paid</div>
            <div className="text-2xl font-bold text-gray-900">1000000</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Student Unpaid</div>
            <div className="text-2xl font-bold text-red-600">1000000</div>
          </div>
        </div>

        {/* Promotions Payment Statistics Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Promotions Payment Statistics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
                <span className="text-sm text-gray-600">Paid Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Unpaid Students</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={promotionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="paidStudents" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="unpaidStudents" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* School Fees Management Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">School Fees Management</h3>
            
            {/* Filters and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search student"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Senior One</option>
                  <option>Senior Two</option>
                  <option>Senior Three</option>
                  <option>Senior Four</option>
                  <option>Senior Five</option>
                  <option>Senior Six</option>
                </select>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Paid</option>
                  <option>Unpaid</option>
                  <option>Partial</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                  Export Report
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                >
                  Add new Fees
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
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
                {feesData.map((item, index) => (
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

      {/* Add New Fees Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Add New Fees</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={newFee.studentName}
                    onChange={handleInputChange}
                    placeholder="Dushimire aine"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Promotion</label>
                  <select
                    name="studentPromotion"
                    value={newFee.studentPromotion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Senior One</option>
                    <option value="Senior One">Senior One</option>
                    <option value="Senior Two">Senior Two</option>
                    <option value="Senior Three">Senior Three</option>
                    <option value="Senior Four">Senior Four</option>
                    <option value="Senior Five">Senior Five</option>
                    <option value="Senior Six">Senior Six</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Class</label>
                  <select
                    name="studentClass"
                    value={newFee.studentClass}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">A</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fees Amount Paid</label>
                  <input
                    type="number"
                    name="feesAmount"
                    value={newFee.feesAmount}
                    onChange={handleInputChange}
                    placeholder="800000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmation Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="document-upload"
                  />
                  <label htmlFor="document-upload" className="cursor-pointer">
                    <p className="text-sm text-gray-600">
                      {newFee.document ? newFee.document.name : 'Upload a supporting document'}
                    </p>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-red-600 text-red-600 text-sm font-medium rounded-md hover:bg-red-50"
                >
                  Cancel Fees
                </button>
                <button
                  onClick={handleSaveFee}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700"
                >
                  Save Fees
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
