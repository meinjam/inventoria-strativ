'use client';

import { Category } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Props = {
  categories: Category[];
  categorySlug?: string;
};

const CategoryFilterOptions = ({ categories, categorySlug }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(categorySlug || '');

  useEffect(() => {
    setSelectedCategory(categorySlug || '');
  }, [categorySlug]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);

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
      value={categorySlug}
      onChange={handleCategory}
      className='block w-52 rounded-md border border-gray-200 px-3 py-[9px] text-sm outline-none placeholder:text-gray-500'
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
