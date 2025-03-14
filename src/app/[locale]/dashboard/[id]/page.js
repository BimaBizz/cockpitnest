'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { decodeJwt } from 'jose';
import CustomerDetails from '@/components/SupportComponents/CustomerDetails';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [token, setToken] = useState(Cookies.get('session'));

  const decodedToken = decodeJwt(token);

  return (
    <div className="flex-1 mb-6">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="md:hidden btn btn-ghost" onClick={() => {
            document.getElementById('sidebar').classList.add('translate-x-0');
          }}>☰</button>
          <h1 className="text-2xl font-bold">{activeTab}</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{decodedToken.user}</span>
        </div>
      </header>
      <main className="bg-white rounded-lg shadow-sm p-6 h-auto">
        <CustomerDetails meta={decodedToken._meta} userId={decodedToken._id}/>
      </main>
    </div>
  );
}
