import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const TextInputComponent = ({ data, remove }) => {
  const { updateFormData } = useContext(FormContext);

  if (remove) return null;

  const handleChange = (e) => {
    updateFormData({ [data.name]: e.target.value });
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
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInputComponent;