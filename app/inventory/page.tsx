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

export default function InventoryPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTerm, setSelectedTerm] = useState('First Term');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: '',
    amount: '',
    category: '',
    supplierName: '',
    stockStatus: '',
    quantity: ''
  });

  // Sample table data
  const inventoryData = [
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'High in Stock', statusColor: 'text-green-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'Low in Stock', statusColor: 'text-orange-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'High in Stock', statusColor: 'text-green-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'Finished', statusColor: 'text-red-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'High in Stock', statusColor: 'text-green-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'High in Stock', statusColor: 'text-green-600', date: '10/5/2025' },
    { name: 'Computer', category: 'Technology', quantity: 100, supplier: 'Dushimire aine', status: 'High in Stock', statusColor: 'text-green-600', date: '10/5/2025' },
  ];

  const totalPages = 68;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveItem = () => {
    console.log('Saving item:', newItem);
    alert('Item added successfully! (No backend connected)');
    setShowAddModal(false);
    setNewItem({
      itemName: '',
      amount: '',
      category: '',
      supplierName: '',
      stockStatus: '',
      quantity: ''
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
          <Link href="/payroll" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <Users size={20} />
            <span>Staff Payroll</span>
          </Link>
          <Link href="/inventory" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-600 rounded-lg">
            <Package size={20} />
            <span className="font-medium">Inventory</span>
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
            <div className="text-sm text-gray-600 mb-2">Total Items</div>
            <div className="text-2xl font-bold text-gray-900">50</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">In Stock</div>
            <div className="text-2xl font-bold text-green-600">30</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Low in Stock</div>
            <div className="text-2xl font-bold text-orange-600">14</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Finished in Stock</div>
            <div className="text-2xl font-bold text-red-600">10</div>
          </div>
        </div>

        {/* Inventory Products Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Inventory Products Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50</div>
              <div className="text-sm text-gray-600">Technology items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
              <div className="text-sm text-gray-600">Academic items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">14</div>
              <div className="text-sm text-gray-600">Maintenance</div>
            </div>
          </div>
        </div>

        {/* Inventory Management Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Management</h3>
            
            {/* Filters and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search product"
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
                  <option>Technology</option>
                  <option>Academic</option>
                  <option>Maintenance</option>
                </select>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Status</option>
                  <option>High in Stock</option>
                  <option>Low in Stock</option>
                  <option>Finished</option>
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
                  Add Item
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventoryData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.supplier}</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${item.statusColor}`}>{item.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
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

      {/* Add New Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Add New Item</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                  <input
                    type="text"
                    name="itemName"
                    value={newItem.itemName}
                    onChange={handleInputChange}
                    placeholder="Rice"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={newItem.amount}
                    onChange={handleInputChange}
                    placeholder="800000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={newItem.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Electronics</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Technology">Technology</option>
                    <option value="Academic">Academic</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Supplier Name</label>
                  <input
                    type="text"
                    name="supplierName"
                    value={newItem.supplierName}
                    onChange={handleInputChange}
                    placeholder="Dushimire aine"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
                  <select
                    name="stockStatus"
                    value={newItem.stockStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Low in Stock</option>
                    <option value="High in Stock">High in Stock</option>
                    <option value="Low in Stock">Low in Stock</option>
                    <option value="Finished">Finished</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={newItem.quantity}
                    onChange={handleInputChange}
                    placeholder="100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
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
                  onClick={handleSaveItem}
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
