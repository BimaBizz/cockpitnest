"use client";

import React, { useState } from 'react';
import { fetchAuth } from '@/lib/account';
import Cookies from 'js-cookie';

const FormLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchAuth(email, password);
    Cookies.set('session', data.JWT);
    window.history.back();
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label className='label'>
                <span className='label-text'>Email</span>
            </label>
            <input 
              type='email' 
              className='input input-bordered w-full' 
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='label'>
                <span className='label-text'>Password</span>
            </label>
            <input 
              type='password' 
              className='input input-bordered w-full' 
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='form-control mt-6'>
            <button type='submit' className='btn btn-primary w-full'>{props.button}</button>
        </div>
    </form>
  );
};

export default FormLogin;