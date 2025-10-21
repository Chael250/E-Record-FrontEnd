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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StaffPayrollPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState('Department');
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStaff, setNewStaff] = useState({
    name: '',
    amount: '',
    staffDepartment: '',
    paymentMode: '',
    paymentStatus: '',
    joiningDate: '',
    contract: null as File | null
  });

  // Sample data for bar chart
  const payrollTrendData = [
    { month: 'Jan', amount: 180 },
    { month: 'Feb', amount: 190 },
    { month: 'Mar', amount: 200 },
    { month: 'Apr', amount: 210 },
    { month: 'May', amount: 220 },
    { month: 'Jun', amount: 230 },
    { month: 'July', amount: 240 },
    { month: 'Aug', amount: 250 },
    { month: 'Sept', amount: 260 },
    { month: 'Oct', amount: 270 },
    { month: 'Nov', amount: 280 },
    { month: 'Dec', amount: 290 },
  ];

  // Sample table data
  const payrollData = [
    { name: 'Dushimire Aine', department: 'Teacher', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Discipline staff', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Doctor', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Teacher', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Cook', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Cleandrives', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
    { name: 'Dushimire Aine', department: 'Teacher', amount: 850000, date: '10/5/2025', status: 'Paid', method: 'Bank Account' },
  ];

  const totalPages = 68;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStaff(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewStaff(prev => ({ ...prev, contract: file }));
    }
  };

  const handleSaveStaff = () => {
    console.log('Saving staff:', newStaff);
    alert('Staff added successfully! (No backend connected)');
    setShowAddModal(false);
    setNewStaff({
      name: '',
      amount: '',
      staffDepartment: '',
      paymentMode: '',
      paymentStatus: '',
      joiningDate: '',
      contract: null
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
          <Link href="/payroll" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <Users size={20} />
            <span className="font-medium">Staff Payroll</span>
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
            <div className="text-sm text-gray-600 mb-2">Total Payroll</div>
            <div className="text-2xl font-bold text-gray-900">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Paid This Month</div>
            <div className="text-2xl font-bold text-green-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Pending Payments</div>
            <div className="text-2xl font-bold text-orange-600">10000000 Rwf</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Staff</div>
            <div className="text-2xl font-bold text-gray-900">10</div>
          </div>
        </div>

        {/* Payroll Trend Overview Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Payroll Trend Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={payrollTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="amount" fill="#7c3aed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Staff Payroll Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Staff Payroll</h3>
              <span className="text-sm text-gray-600">Total amount: 1000000 Rwf</span>
            </div>
            
            {/* Filters and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search staff"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select 
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Department</option>
                  <option>Teacher</option>
                  <option>Doctor</option>
                  <option>Cook</option>
                  <option>Cleandrives</option>
                  <option>Discipline staff</option>
                </select>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
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
                  Add new Staff
                </button>
                <button className="px-4 py-2 bg-white border border-purple-600 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-50">
                  Generate payroll
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
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
                {payrollData.map((item, index) => (
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

      {/* Add new Staff Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Add new Staff</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newStaff.name}
                    onChange={handleInputChange}
                    placeholder="Dushimire aine"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={newStaff.amount}
                    onChange={handleInputChange}
                    placeholder="800000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Staff Department</label>
                  <select
                    name="staffDepartment"
                    value={newStaff.staffDepartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select department</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Cook">Cook</option>
                    <option value="Cleandrives">Cleandrives</option>
                    <option value="Discipline staff">Discipline staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment mode</label>
                  <select
                    name="paymentMode"
                    value={newStaff.paymentMode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Bank payments</option>
                    <option value="Bank payments">Bank payments</option>
                    <option value="Cash">Cash</option>
                    <option value="Mobile Money">Mobile Money</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment status</label>
                  <select
                    name="paymentStatus"
                    value={newStaff.paymentStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select status</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Joining Date</label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={newStaff.joiningDate}
                    onChange={handleInputChange}
                    placeholder="10/10/2025"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Staff Contract</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="contract-upload"
                  />
                  <label htmlFor="contract-upload" className="cursor-pointer">
                    <p className="text-sm text-gray-600">
                      {newStaff.contract ? newStaff.contract.name : 'Upload staff contract'}
                    </p>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-red-600 text-red-600 text-sm font-medium rounded-md hover:bg-red-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveStaff}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
