import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <div className='rounded-lg bg-red-50 p-6 border border-red-200'>
      <div className='flex flex-col items-center text-center'>
        <div className='h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-red-500'
          >
            <circle cx='12' cy='12' r='10' />
            <line x1='12' y1='8' x2='12' y2='12' />
            <line x1='12' y1='16' x2='12.01' y2='16' />
          </svg>
        </div>
        <h3 className='text-lg font-medium text-red-800 mb-2'>Error Loading Data</h3>
        <p className='text-red-600'>{message}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;
