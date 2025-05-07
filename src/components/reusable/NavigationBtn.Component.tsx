'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface NavigationBtnType {
  title: string;
  type: 'back' | 'forward';
}

const NavigationBtn = ({ title, type }: NavigationBtnType) => {
  const router = useRouter();

  const handleBtnClick = () => {
    if (type === 'back') {
      router.back();
    }

    if (type === 'forward') {
      router.forward();
    }
  };

  return (
    <>
      <button onClick={handleBtnClick} className='btn'>
        {title}
      </button>
    </>
  );
};

export default NavigationBtn;
