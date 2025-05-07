import { Product } from '@/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { LuEye } from 'react-icons/lu';
import Image from 'next/image';

interface Props {
  products: Product[];
}

const ProductTable = ({ products }: Props) => {
  return (
    <div className='overflow-x-auto rounded border border-gray-300 shadow-sm'>
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
          {products.map((product) => (
            <tr key={product.id} className='*:text-gray-900 *:first:font-medium'>
              <td className='px-3 py-2 whitespace-nowrap'>
                <span className='flex items-center gap-2'>
                  <span className='h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Image
                      src={product?.images[0]}
                      alt={product?.title}
                      width={40}
                      height={40}
                      className='rounded-full size-10'
                    />
                  </span>
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
