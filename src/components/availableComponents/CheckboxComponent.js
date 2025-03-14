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
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-full">
      <legend className="fieldset-legend">{data.name}</legend>
      <label className="fieldset-label">
        <input 
          type="checkbox" 
          className="checkbox" 
          checked={checked}
          onChange={handleChange}
          required
        />
      </label>
    </fieldset>
  );
};

export default CheckboxComponent;