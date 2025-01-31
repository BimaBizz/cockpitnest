"use client";

import React from 'react'

const ButtonHistory = () => {

  return (
    <button className='absolute top-4 left-4 btn btn-ghost' onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
    </button>
  )
}

export default ButtonHistory