import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { ChevronLeft } from 'lucide-react';

export default function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="fixed left-0 top-4 z-50 p-1.5 bg-white rounded-r-lg shadow-md border border-l-0 border-gray-200"
        style={{ left: isSidebarCollapsed ? '64px' : '240px' }}
      >
        <ChevronLeft className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
          isSidebarCollapsed ? 'rotate-180' : ''
        }`} />
      </button>

      <main className={`flex-1 p-8 transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-60'
      }`}>
        <Outlet />
      </main>
    </div>
  );
}