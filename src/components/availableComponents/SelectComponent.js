'use client'
import React, { useContext } from 'react';
import { FormContext } from '@/context/FormContext';

const SelectComponent = ({ data, remove }) => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error('SelectComponent harus digunakan dalam FormProvider');
  }

  const { updateFormData } = formContext;

  if (remove) return null;

  const handleChange = (e) => {
    updateFormData({ [data.name]: e.target.value });
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{data.name}</span>
      </label>
      <select 
        className="select select-bordered" 
        onChange={handleChange}
      >
        {data.selectList.listname.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;