'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  priceMin?: string;
  priceMax?: string;
}

const PriceFilter = ({ priceMin, priceMax }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const [price, setPrice] = useState<{ min: string; max: string }>({
    min: priceMin || '',
    max: priceMax || '',
  });

  useEffect(() => {
    setPrice({
      min: priceMin || '',
      max: priceMax || '',
    });
  }, [priceMin, priceMax]);

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    if (price.min === '' && price.max === '') {
      toast.error('Please enter a price range');
      return;
    }

    if (Number(price.min) > Number(price.max)) {
      toast.error('Min price cannot be greater than max price');
      return;
    }

    if (Number(price.min) < 1 || Number(price.max) < 1) {
      toast.error('Price must be greater than 0');
      return;
    }

    const params = new URLSearchParams(searchParams);

    params.set('priceMin', price.min);
    params.set('priceMax', price.max);
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex flex-wrap items-center gap-2'>
      <input
        className='block w-32 rounded-md border border-gray-200 px-3 py-[9px] text-sm outline-none placeholder:text-gray-500'
        placeholder='min price'
        name='min'
        type='number'
        min={1}
        value={price?.min}
        onChange={handlePriceRange}
      />
      <input
        className='block w-32 rounded-md border border-gray-200 px-3 py-[9px] text-sm outline-none placeholder:text-gray-500'
        placeholder='max price'
        name='max'
        type='number'
        min={1}
        value={price.max}
        onChange={handlePriceRange}
      />
      <button className={'btn'} onClick={handleApply}>
        Apply Range
      </button>
    </div>
  );
};

export default PriceFilter;
