'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';

const TextInputComponent = ({ data, remove }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(formData[data.name] || '');
  }, [formData, data.name]);

  if (remove) return null;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateFormData({ [data.name]: newValue });
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{data.name}</span>
      </label>
      <input 
        type="text" 
        name={data.name || "input"} 
        placeholder={data.placeholder || "Enter text here"} 
        className="input input-bordered w-full" 
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default TextInputComponent;