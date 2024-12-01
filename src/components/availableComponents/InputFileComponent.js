import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const InputFileComponent = ({ data, remove }) => {
  const { updateFormData } = useContext(FormContext);

  if (remove) return null;

  const handleChange = (e) => {
    updateFormData({ [data.name]: e.target.files });
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
      />
    </div>
  );
};

export default InputFileComponent;