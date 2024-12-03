'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '@/context/FormContext';

const SelectComponent = ({ data, remove }) => {
  const { formData, updateFormData } = useContext(FormContext);

  if (remove) return null;

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(formData[data.name] || '');
  }, [formData, data.name]);

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
      <select 
        className="select select-bordered" 
        value={value}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select an option</option>
        {data.selectList.listname.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;