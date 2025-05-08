'use client';

import Link from 'next/link';
import React from 'react';

type Props = {
  query?: string;
  priceMin?: string;
  priceMax?: string;
  categorySlug?: string;
};

const FilterReset = ({ query, priceMin, priceMax, categorySlug }: Props) => {
  if (!query && !priceMin && !priceMax && !categorySlug) {
    return null;
  }

  return (
    <Link href='/' className='btn error-btn'>
      Reset Filter
    </Link>
  );
};

export default FilterReset;
