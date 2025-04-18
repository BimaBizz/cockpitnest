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

    </div>
  );
}
