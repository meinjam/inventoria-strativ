'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from 'rc-pagination';
import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
// import 'rc-pagination/assets/index.css'; // optional if you want base styles

const CustomPagination = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePagination = (current: number, pageSize: number) => {
    // console.log(current);
    // console.log(pageSize);

    const params = new URLSearchParams(searchParams);
    params.set('page', String(current));

    push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex justify-end mt-4'>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={10}
        total={50}
        onChange={handlePagination}
        className='custom-pagination'
        prevIcon={
          <span className='text-gray-500'>
            <IoChevronBackOutline />
          </span>
        }
        nextIcon={
          <span className='text-gray-500'>
            <IoChevronBackOutline className='rotate-180' />
          </span>
        }
      />
    </div>
  );
};

export default CustomPagination;
