'use client'

import React, { useContext } from 'react';
import { FormContext, FormProvider } from '../../context/FormContext';
import ComponentRenderer from '../ComponentRenderer';

const FormComponent = ({ data, children, remove }) => {
  if (remove) return null;

  const handleSubmit = async (event, formData) => {
    event.preventDefault();
    const token = data.key;
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/inbox/submit/${token}`;

    const body = new FormData();
    for (const key in formData) {
      if (formData[key] instanceof FileList) {
        for (let i = 0; i < formData[key].length; i++) {
          body.append(`data[${key}]`, formData[key][i]);
        }
      } else {
        body.append(`data[${key}]`, formData[key]);
      }
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: body,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormProvider>
      <FormContent data={data} children={children} handleSubmit={handleSubmit} />
    </FormProvider>
  );
};

const FormContent = ({ data, children, handleSubmit }) => {
  const { formData } = useContext(FormContext);

  return (
    <form className="form-control" onSubmit={(e) => handleSubmit(e, formData)} encType="multipart/form-data" acceptCharset="UTF-8">
      {children && children.map((child, index) => (
        <ComponentRenderer key={index} component={child} />
      ))}
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default FormComponent;