'use client';

import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  placeholder: string;
  query?: string;
};

const Search = ({ placeholder, query }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
      params.set('page', '1');
    } else {
      params.delete('query');
      params.delete('page');
    }

    push(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className='flex'>
      <div className='relative'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='block w-52 rounded-md border border-gray-200 py-[9px] pr-3 pl-10 text-sm outline-none placeholder:text-gray-500'
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query?.toString()}
        />
        <CiSearch className='absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      </div>
    </div>
  );
};

export default Search;
