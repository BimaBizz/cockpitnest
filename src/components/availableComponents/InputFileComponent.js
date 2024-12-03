'use client'

import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';

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
    <div className="form-control">
      <label className="label">
        <span className="label-text">{data.name}</span>
      </label>
      <input 
        type="file" 
        name={data.name || "file"} 
        className="file-input file-input-bordered" 
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputFileComponent;