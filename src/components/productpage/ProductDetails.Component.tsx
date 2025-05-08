import { Product } from '@/types';
import dayjs from 'dayjs';
import React from 'react';
import ProductImg from '@/components/productpage/ProductImg.Component';

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className='mx-auto max-w-5xl'>
      <div className='grid items-start gap-8 md:grid-cols-2'>
        {/* Product Image */}
        <ProductImg images={product?.images} />

        {/* Product Info */}
        <div className='space-y-5'>
          <h1 className='text-3xl font-bold text-gray-900'>{product?.title}</h1>

          <span className='inline-block rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-700 capitalize'>
            Category: {product?.category?.name}
          </span>

          <p className='text-primary text-2xl font-semibold'>${product?.price}</p>

          <div>
            <h2 className='mb-1 text-lg font-semibold text-gray-800'>Description</h2>
            <p className='leading-relaxed text-gray-600'>{product?.description}</p>
          </div>

          <div className='text-sm text-gray-400'>
            <p>
              Created:{' '}
              <span className='font-medium text-gray-500'>
                {dayjs(product?.creationAt).format('DD MMM YYYY; hh:mm A')}
              </span>
            </p>
            <p>
              Updated:{' '}
              <span className='font-medium text-gray-500'>
                {dayjs(product?.updatedAt).format('DD MMM YYYY; hh:mm A')}
              </span>
            </p>
          </div>

          <a href='#' className='btn mt-4 inline-block'>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
