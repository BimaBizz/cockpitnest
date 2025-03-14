'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove('session');
    window.location.href = '/';
  };

  const menuItems = [
    'Dashboard', 'User Details', 'Orders', 'Settings'
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside id='sidebar' className={`fixed flex flex-col inset-y-0 left-0 z-50 transform bg-gray-900 text-white w-64 md:w-72 p-4 md:p-6 transition-transform duration-300 ease-in-out -translate-x-full md:translate-x-0`}> 
        <div className="flex justify-between items-center mb-4 py-2">
          <Link href={'/'} className="text-xl font-bold">Floranest</Link>
          <button className="md:hidden text-white" onClick={() => document.getElementById('sidebar').classList.remove('translate-x-0')}>✖</button>
        </div>
        <nav className="flex-1">
          <ul>
            {menuItems.map(item => (
              <li key={item} 
                  className={`p-2 rounded-lg cursor-pointer ${activeTab === item ? 'bg-gray-700' : ''}`} 
                  onClick={() => { setActiveTab(item); setSidebarOpen(false); }}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="w-full p-2 bg-gray-800 rounded-lg" onClick={handleLogout}>Logout</button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 p-6 md:ml-72 mb-6">
        {children}
      </div>
    </div>
  );
}
