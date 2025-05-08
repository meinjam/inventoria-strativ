'use client';

import { cn } from '@/lib/cn';
import { paginationLimit } from '@/utils/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from 'rc-pagination';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  total: number;
  current: number;
}

const CustomPagination = ({ total, current }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePagination = (current: number, pageSize: number) => {
    // console.log(current);
    // console.log(pageSize);

    const params = new URLSearchParams(searchParams);
    params.set('page', String(current));

    push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const itemRender = (currentPage: number, type: string, element: React.ReactNode) => {
    if (type === 'page') {
      return (
        <button
          className={cn(
            'mx-1 flex size-8 cursor-pointer items-center justify-center rounded-full duration-300',
            currentPage === current ? 'bg-primary text-white' : 'text-black hover:bg-gray-100'
          )}
        >
          {currentPage}
        </button>
      );
    }
    if (type === 'prev') {
      return (
        <button className='flex size-8 cursor-pointer items-center justify-center rounded-full text-black duration-300 hover:bg-gray-100'>
          <IoIosArrowBack className='size-4' />
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button className='flex size-8 cursor-pointer items-center justify-center rounded-full text-black duration-300 hover:bg-gray-100'>
          <IoIosArrowForward className='size-4' />
        </button>
      );
    }
    return element;
  };

  return (
    <div className='mt-4 flex justify-end'>
      <Pagination
        current={current}
        total={total}
        onChange={handlePagination}
        defaultPageSize={paginationLimit}
        className='flex items-center justify-center'
        showTitle={false}
        itemRender={itemRender}
      />
    </div>
  );
};

export default CustomPagination;
