'use client';

import { Category } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type Props = {
  categories: Category[];
  categorySlug?: string;
};

const CategoryFilterOptions = ({ categories, categorySlug }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('categorySlug', value);
      params.set('page', '1');
    } else {
      params.delete('categorySlug');
      params.delete('page');
    }

    push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      defaultValue={categorySlug}
      onChange={handleCategory}
      className='block rounded border border-gray-200 px-3 py-[9px] text-sm outline-none placeholder:text-gray-500'
    >
      <option value=''>All Categories</option>
      {categories?.map((category) => (
        <option key={category?.id} value={category?.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilterOptions;
