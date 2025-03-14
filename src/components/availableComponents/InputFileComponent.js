'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '@/context/FormContext';

const InputFileComponent = ({ data, remove }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    setFiles(formData[data.name] || null);
  }, [formData, data.name]);

  if (remove) return null;

  const handleChange = (e) => {
    const newFiles = e.target.files;
    setFiles(newFiles);
    updateFormData({ [data.name]: newFiles });
  };

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">
        {data.name}
      </legend>
      <input 
        type="file" 
        name={data.name || "file"} 
        className="file-input w-full" 
        onChange={handleChange}
        required
      />
    </fieldset>
  );
};

export default InputFileComponent;