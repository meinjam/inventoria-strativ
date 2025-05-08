'use client';

import { Product } from '@/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuEye } from 'react-icons/lu';
import Image from 'next/image';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface Props {
  products: Product[];
}

const ProductTable = ({ products }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortConfig, setSortConfig] = useState<{
    key: 'title' | 'price';
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (key: 'title' | 'price') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });

    const sorted = [...filteredProducts].sort((a, b) => {
      if (key === 'title') {
        return direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }

      if (key === 'price') {
        return direction === 'asc' ? a.price - b.price : b.price - a.price;
      }

      return 0;
    });

    setFilteredProducts(sorted);
  };

  return (
    <div className='overflow-x-auto rounded border border-gray-300 shadow-sm'>
      <table className='min-w-full divide-y-2 divide-gray-200'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr className='*:font-medium *:text-gray-900'>
            <th className='cursor-pointer px-3 py-2 whitespace-nowrap select-none' onClick={() => handleSort('title')}>
              <span className='flex items-center justify-between gap-1'>
                Title
                <span className='flex flex-col leading-none'>
                  <FiChevronUp
                    className={`size-4 ${
                      sortConfig?.key === 'title' && sortConfig.direction === 'asc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                  <FiChevronDown
                    className={`-mt-1 size-4 ${
                      sortConfig?.key === 'title' && sortConfig.direction === 'desc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                </span>
              </span>
            </th>
            <th className='cursor-pointer px-3 py-2 whitespace-nowrap select-none' onClick={() => handleSort('price')}>
              <span className='flex items-center justify-between gap-1'>
                Price
                <span className='flex flex-col leading-none'>
                  <FiChevronUp
                    className={`size-4 ${
                      sortConfig?.key === 'price' && sortConfig.direction === 'asc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                  <FiChevronDown
                    className={`-mt-1 size-4 ${
                      sortConfig?.key === 'price' && sortConfig.direction === 'desc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                </span>
              </span>
            </th>
            <th className='px-3 py-2 whitespace-nowrap'>Category</th>
            <th className='px-3 py-2 whitespace-nowrap'>Created At</th>
            <th className='px-3 py-2 whitespace-nowrap'>Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {filteredProducts.length === 0 && (
            <tr>
              <td colSpan={5} className='px-3 py-5 text-center whitespace-nowrap'>
                <span className='text-gray-500'>Sorry, no products found</span>
              </td>
            </tr>
          )}

          {filteredProducts.map((product) => (
            <tr key={product.id} className='*:text-gray-900 *:first:font-medium'>
              <td className='px-3 py-2 whitespace-nowrap'>
                <span className='flex items-center gap-2'>
                  {/* <span className='h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Image
                      src={product?.images[0]}
                      alt={product?.title}
                      width={40}
                      height={40}
                      className='rounded-full size-10'
                    />
                  </span> */}
                  <span>{product?.title}</span>
                </span>
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>${product?.price}</td>
              <td className='px-3 py-2 whitespace-nowrap capitalize'>{product?.category?.name}</td>
              <td className='px-3 py-2 whitespace-nowrap'>
                {product?.creationAt ? dayjs(product.creationAt).format('DD MMM YYYY; hh:mm A') : 'N/A'}
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                <Link href={`/${product?.slug}`} className='text-primary' title='View Product'>
                  <LuEye className='size-5' />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
