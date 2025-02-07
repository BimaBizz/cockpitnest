import React, { useState, useEffect } from 'react'
import { updateUserMeta } from '@/lib/account'
import Cookies from 'js-cookie';

// This component is used to store customer details. Below is a form that captures the following data:
// "customer_details": {
//     "first_name": "string",
//     "last_name": "string",
//     "email": "string",
//     "phone": "string"
// },
// "shipping_address": {
//     "address": "string",
//     "city": "string",
//     "postal_code": "string",
//     "country_code": "string"
// }

const CustomerDetails = ({ meta, userId }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal_code: '',
    country_code: ''
  });

  useEffect(() => {
    if (meta) {
      setFormData({
        first_name: meta.customer_details?.first_name || '',
        last_name: meta.customer_details?.last_name || '',
        email: meta.customer_details?.email || '',
        phone: meta.customer_details?.phone || '',
        address: meta.shipping_address?.address || '',
        city: meta.shipping_address?.city || '',
        postal_code: meta.shipping_address?.postal_code || '',
        country_code: meta.shipping_address?.country_code || ''
      });
    }
  }, [meta]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meta = {
      customer_details: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone
      },
      shipping_address: {
        address: formData.address,
        city: formData.city,
        postal_code: formData.postal_code,
        country_code: formData.country_code
      }
    };
    const response = await updateUserMeta(userId, meta);
    Cookies.set('session', response.JWT);
  };

  return (
    <div className="">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold">Customer Details</h2>
        <div className='grid grid-cols-2 gap-4'>
          <label className="block">
            First Name:
            <input type="text" name="first_name" className="input input-bordered w-full" value={formData.first_name} onChange={handleChange} />
          </label>
          <label className="block">
            Last Name:
            <input type="text" name="last_name" className="input input-bordered w-full" value={formData.last_name} onChange={handleChange} />
          </label>
        </div>
        <label className="block">
          Email:
          <input type="email" name="email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} />
        </label>
        <label className="block">
          Phone:
          <input type="tel" name="phone" className="input input-bordered w-full" value={formData.phone} onChange={handleChange} />
        </label>
        <h2 className="text-lg font-bold">Shipping Address</h2>
        <label className="block">
          Address:
          <input type="text" name="address" className="input input-bordered w-full" value={formData.address} onChange={handleChange} />
        </label>
        <label className="block">
          City:
          <input type="text" name="city" className="input input-bordered w-full" value={formData.city} onChange={handleChange} />
        </label>
        <label className="block">
          Postal Code:
          <input type="text" name="postal_code" className="input input-bordered w-full" value={formData.postal_code} onChange={handleChange} />
        </label>
        <label className="block">
          Country Code:
          <input type="text" name="country_code" className="input input-bordered w-full" value={formData.country_code} onChange={handleChange} />
        </label>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  )
}

export default CustomerDetails