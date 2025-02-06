"use client";

import React, { useState } from 'react';
import { fetchRegister } from '@/lib/account';

const FormSignup = (props) => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchRegister(user, name, email, password);
    window.location.href = `/${props.lang}/login`;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">{props.user}</span>
        </label>
        <input 
          type="text" 
          className="input input-bordered w-full" 
          value={user}
          required
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">{props.nama}</span>
        </label>
        <input 
          type="text" 
          className="input input-bordered w-full" 
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input 
          type="email" 
          className="input input-bordered w-full" 
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input 
          type="password" 
          className="input input-bordered w-full" 
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full">
          {props.button}
        </button>
      </div>
    </form>
  );
}

export default FormSignup;