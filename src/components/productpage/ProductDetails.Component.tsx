import { Product } from '@/types';
import dayjs from 'dayjs';
import React from 'react';
import ProductImg from '@/components/productpage/ProductImg.Component';

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className='max-w-5xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-8 items-start'>
        {/* Product Image */}
        <ProductImg images={product?.images} />

        {/* Product Info */}
        <div className='space-y-5'>
          <h1 className='text-3xl font-bold text-gray-900'>{product?.title}</h1>

          <span className='inline-block bg-gray-100 capitalize text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-300'>
            Category: {product?.category?.name}
          </span>

          <p className='text-2xl font-semibold text-primary'>${product?.price}</p>

          <div>
            <h2 className='text-lg font-semibold text-gray-800 mb-1'>Description</h2>
            <p className='text-gray-600 leading-relaxed'>{product?.description}</p>
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

          <a href='#' className='inline-block mt-4 btn'>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
