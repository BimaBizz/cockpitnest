'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '@/context/FormContext';

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
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{data.name}</legend>
      <input 
        type={data.type || "text"} 
        name={data.name || "input"} 
        placeholder={data.placeholder || "Type here"} 
        className="input w-full" 
        value={value}
        onChange={handleChange}
        required
      />
    </fieldset>
  );
};

export default TextInputComponent;