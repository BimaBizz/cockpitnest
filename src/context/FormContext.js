'use client'

import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const resetFormData = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm: resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};