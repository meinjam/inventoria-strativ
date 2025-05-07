import Link from 'next/link';
import React from 'react';
import { BsShieldExclamation } from 'react-icons/bs';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <div className='rounded-xl border border-red-300 bg-red-50 p-6 ring-1 ring-red-100'>
      <div className='flex flex-col items-center text-center space-y-3'>
        <div className='h-14 w-14 rounded-full bg-red-100 flex items-center justify-center animate-pulse'>
          <BsShieldExclamation className='h-8 w-8 text-red-600' />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-red-800'>Something Went Wrong</h3>
          <p className='mt-1 text-sm text-red-600'>{message}</p>
        </div>
        <Link href='/' className='mt-2 btn'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorDisplay;
