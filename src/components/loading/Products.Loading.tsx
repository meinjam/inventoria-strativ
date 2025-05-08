import React from 'react';

const ProductsLoading = () => {
  return (
    <div className='animate-pulse overflow-x-auto rounded border border-gray-300 shadow-sm'>
      <table className='min-w-full divide-y-2 divide-gray-200'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr className='*:font-medium *:text-gray-900'>
            <th className='px-3 py-2 whitespace-nowrap'>Title</th>
            <th className='px-3 py-2 whitespace-nowrap'>Price</th>
            <th className='px-3 py-2 whitespace-nowrap'>Category</th>
            <th className='px-3 py-2 whitespace-nowrap'>Created At</th>
            <th className='px-3 py-2 whitespace-nowrap'>Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {[...Array(10)].map((_, index) => (
            <tr key={index} className='*:text-gray-900 *:first:font-medium'>
              <td className='px-3 py-2 whitespace-nowrap'>
                <div className='h-4 w-32 animate-pulse rounded bg-gray-200'></div>
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                <div className='h-4 w-16 animate-pulse rounded bg-gray-200'></div>
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                <div className='h-4 w-24 animate-pulse rounded bg-gray-200'></div>
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                <div className='h-4 w-28 animate-pulse rounded bg-gray-200'></div>
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                <div className='h-5 w-5 animate-pulse rounded bg-gray-200'></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsLoading;
