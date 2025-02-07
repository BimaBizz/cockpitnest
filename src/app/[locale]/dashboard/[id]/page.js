'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { decodeJwt } from 'jose';
import Link from 'next/link';
import CustomerDetails from '@/components/SupportComponents/CustomerDetails';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(Cookies.get('session'));

  const decodedToken = decodeJwt(token);

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
      <aside className={`fixed flex flex-col inset-y-0 left-0 z-50 transform bg-gray-900 text-white w-64 md:w-72 p-4 md:p-6 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}  md:translate-x-0`}> 
        <div className="flex justify-between items-center mb-4 py-2">
          <Link href={'/'} className="text-xl font-bold">Floranest</Link>
          <button className="md:hidden text-white" onClick={() => setSidebarOpen(false)}>✖</button>
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
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button className="md:hidden btn btn-ghost" onClick={() => setSidebarOpen(true)}>☰</button>
            <h1 className="text-2xl font-bold">{activeTab}</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{decodedToken.user}</span>
          </div>
        </header>
        <main className="bg-white rounded-lg shadow p-6 h-auto">
          <CustomerDetails meta={decodedToken._meta} userId={decodedToken._id}/>
        </main>
      </div>
    </div>
  );
}
