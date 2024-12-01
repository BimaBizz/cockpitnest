'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ButtonComponent = ({ data }) => {
  const buttondata = data.data;
  const remove = data.hidden;

  const router = useRouter();

  return remove ? false : (
    <button
      className="btn btn-primary"
      onClick={() => router.push(buttondata.url)}
      formTarget={buttondata.target}
    >
      {buttondata.caption}
    </button>
  );
};

export default ButtonComponent;