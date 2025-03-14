'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '@/context/FormContext';

const SelectComponent = ({ data, remove }) => {
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
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{data.name}</legend>
      <select 
        className="select w-full" 
        value={value}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Pick an option</option>
        {data.selectList.listname.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <span className="fieldset-label">Optional</span>
    </fieldset>
  );
};

export default SelectComponent;