import React from 'react';

const ProductsLoading = () => {
  return (
    <>
      <div className='overflow-x-auto rounded border border-gray-300 shadow-sm animate-pulse'>
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
            {[...Array(10)].map((_, idx) => (
              <tr key={idx} className='*:text-gray-900 *:first:font-medium'>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <span className='flex items-center gap-2'>
                    <span className='h-10 w-10 rounded-full bg-gray-200' />
                    <span className='h-4 w-32 rounded bg-gray-200' />
                  </span>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <span className='h-4 w-12 rounded bg-gray-200 block' />
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <span className='h-4 w-24 rounded bg-gray-200 block' />
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <span className='h-4 w-36 rounded bg-gray-200 block' />
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <span className='h-5 w-5 rounded bg-gray-200 inline-block' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsLoading;
