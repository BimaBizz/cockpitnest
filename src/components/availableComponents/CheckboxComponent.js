import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const CheckboxComponent = ({ data, remove }) => {
  const { updateFormData } = useContext(FormContext);

  if (remove) return null;

  const handleChange = (e) => {
    updateFormData({ [data.name]: e.target.checked });
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{data.name}</span>
        <input 
          type="checkbox" 
          className="checkbox checkbox-primary" 
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default CheckboxComponent;