'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '@/context/FormContext';

const CheckboxComponent = ({ data, remove }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(formData[data.name] || false);
  }, [formData, data.name]);

  if (remove) return null;

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    updateFormData({ [data.name]: newChecked });
  };

  return (
    <div className="form-control my-2">
      <label className="label cursor-pointer">
        <span className="label-text">{data.name}</span>
        <input 
          type="checkbox" 
          className="checkbox checkbox-primary" 
          checked={checked}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default CheckboxComponent;